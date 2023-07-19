const { userSignup, login, getUser } = require("../controllers/userController")
const { auth } = require("../middleware/auth")

const router  =  require("express").Router()


router.route("/signup").post(userSignup)
router.route("/login").post(login)
router.route("/getuser").get(auth ,getUser)

module.exports = router