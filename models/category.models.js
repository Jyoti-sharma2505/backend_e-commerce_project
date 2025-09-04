const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },   // Example: "Clothing"
    description: String,
    subCategories: [String],                  // Example: ["Men", "Women", "Kids"]
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema)

module.exports = Category;
