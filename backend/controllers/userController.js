const userModel = require("../models/userModel");
const { genToken } = require("../utils/genToken");
const bcrypt = require("bcrypt");
const { comparePassword } = require("../utils/hashPassword");
const saltRounds = 10;

exports.userSignup = async (req, res) => {
  const { fullName, email, password } = req.body;

  const checkUserExists = await userModel.findOne({ email });
  if (!checkUserExists) {
    // hashing the password
    const encryptPassword = await bcrypt.hash(password, saltRounds);
    const token = genToken(email);

    const user = await userModel.create({
      fullName,
      email,
      password: encryptPassword,
      token,
    });
    return res.send({ user, success: true });
  }

  return res.send({ message: "Something went wrong.", success: false });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const checkUser = await userModel.findOne({ email });
  console.log(checkUser);
  if (checkUser) {
    console.log("Login");
    console.log("B");
    bcrypt.compare(password, checkUser.password, function (err, result) {
      if (result) {
        const token = genToken(checkUser.email);
        res.status(200);
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: "none",
        });
        res.send({ message: "User Login Successfully!", token, success: true });
      } else {
        return res
          .status(500)
          .send({ message: "Server error!", success: false });
      }
    });
  } else {
    return res
      .status(401)
      .send({ message: "User not authenticate.", success: false });
  }
};

exports.getUser = async (req, res) => {
  const user = req.user;
  res.send({ user, success: true });
};
