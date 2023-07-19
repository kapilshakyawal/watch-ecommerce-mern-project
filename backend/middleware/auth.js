const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

exports.auth = async (req, res, next) => {
  try {
    console.log(req.headers.cookie)
    console.log(req.cookies.token)
    const token = req.cookies.token || req.header.cookie
    console.log(token )
    const decodeToken = jwt.verify(token, process.env.JWT);
    const user = await userModel.findOne({ email: decodeToken.email });
    if (!user) {
      return res.send("User is not authorizd");
    }
    user.password = undefined;
    req.user = user;
    next();
    // const user = await userModel.findOne({token})
    // if (user) {
    //   console.log("2")
    //   const decodeToken = jwt.verify(user.token, process.env.jwt);
    //   console.log(decodeToken);
    //   if (decodeToken === user.email) {
    //     req.user = user
    //     next()
    // };
    // }
  } catch (error) {
    res.status(400).send(error);
  }
};
