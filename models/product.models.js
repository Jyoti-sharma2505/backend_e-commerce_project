const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    subCategory: { type: String }, // "Men", "Women"
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    description: String,
    image: String,
    stock: { type: Number, default: 10 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema)
module.exports = Product;
