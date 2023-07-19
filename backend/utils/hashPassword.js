const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hashPassword = async (password) => {
  const encryptPassword = await bcrypt.hash(password, saltRounds);
  console.log("sdjkfkjdfklajsdkfj",encryptPassword)
  return encryptPassword;
};

exports.comparePassword = async (password, encryptedPassword) => {
  await bcrypt.compare(
    password,
    encryptedPassword,
    (error, result) => {
      if (error) {
        console.log(error);
        return false;
      }
      console.log(result);
      return true;
    }
  );
};
