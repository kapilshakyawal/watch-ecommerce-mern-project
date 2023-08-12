const ProductModel = require("../models/ProductModel");

exports.addProduct = async (req, res) => {
  const { title, description, color, brand, price, file } = req.body;
    // if (!title || !description || !color || !brand || !price) {
    //   return res.send({"message":"please fill the proper details of product.",success: false });
    // }
  const product = await ProductModel.create({
    user:req.user._id,
    title,
    description,
    color,
    brand,
    price,
    file,
  });

  if (!product) {
    return res.send({
      message: "Something went wrong in uploading product",
      success: false,
    });
  }

  res.send({
    message: "Product Added Successfully",
    success: true,
    product,
  });
};

exports.getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  if (!products)
    return res.send({
      message: "Something went wrong in getting products",
      success: false,
    });
  return res.status(200).json({
    message: "Product list",
    success: true,
    products,
  });
};
