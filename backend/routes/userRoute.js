const { userSignup, login, getUser,logout } = require("../controllers/userController")
const { auth } = require("../middleware/auth")

const router  =  require("express").Router()


router.route("/signup").post(userSignup)
router.route("/login").post(login)
router.route("/logout").get(auth,logout)
router.route("/getuser").get(auth ,getUser)

module.exports = router