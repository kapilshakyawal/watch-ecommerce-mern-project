const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  color: [{ type: String }],
  brand: { type: String },
  price: { type: String },
  file: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
