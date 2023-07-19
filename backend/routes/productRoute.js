const express = require("express")
const { addProduct, getProducts } = require("../controllers/productController")
const { auth } = require("../middleware/auth")

const router  =  require("express").Router()


router.route("/add/product").post( express.json({ limit: '20MB' }),auth,addProduct)
router.route("/get/product/list").get( express.json({ limit: '20MB' }),getProducts)


module.exports = router