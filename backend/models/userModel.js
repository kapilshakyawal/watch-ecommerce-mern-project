const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    token :{
      type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);
