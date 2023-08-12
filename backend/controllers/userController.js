const userModel = require("../models/userModel");
const { genToken } = require("../utils/genToken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.userSignup = async (req, res) => {
  try {
    
    const { fullName, email, password,role } = req.body;
    if (!fullName || !email || !password || !role) {
      return res.send({ message: "Fill the form properly.", success: false });
    }
    const checkUserExists = await userModel.findOne({ email });
    if (!checkUserExists) {
      // hashing the password
      const encryptPassword = await bcrypt.hash(password, saltRounds);
      const token = genToken(email);
  
      const user = await userModel.create({
        fullName,
        email,
        password: encryptPassword,
        role,
        token,
      });
      return res.send({  message: "Signup successfully!", success: true });
    }
  } catch (error) {
    
    return res.send({ message: "Something went wrong.", success: false,error });
  }

};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send({ message: "Fill the form properly.", success: false });
  }
  const checkUser = await userModel.findOne({ email });
  console.log(checkUser);
  if (checkUser) {
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
        res.cookie("ROLE", checkUser.role, {
          httpOnly: true,
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: "none",
          
        });
        res.send({ message: "User Login Successfully!", token, "ROLE" : checkUser.role, success: true });
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



exports.logout = async(req,res) => {
  res.clearCookie('ROLE').clearCookie("token").redirect("/")
}

exports.getUser = async (req, res) => {
  const user = req.user;
  res.send({ user, success: true });
};
