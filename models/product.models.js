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

    // ✅ New fields
    inCart: { type: Boolean, default: false }, // By default product cart me nahi hoga
    discount: { type: Number, default: 20 }    // Default 20% discount
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
