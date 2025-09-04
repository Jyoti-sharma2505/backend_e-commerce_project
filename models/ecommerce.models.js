const mongoose = require("mongoose");

const ecommerceSchema = new mongoose.Schema(
  {
    // User Info
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      addresses: [
        {
          fullName: String,
          phone: String,
          street: String,
          city: String,
          state: String,
          country: String,
          pincode: String,
        },
      ],
    },

    // Categories (like Electronics, Books, Clothing etc.)
    categories: [
      {
        name: { type: String, required: true }, // Example: "Electronics" or "Clothing"
        description: String,
        subCategories: [String], // Example: ["Men", "Women", "Kids"]
      },
    ],

    // Products Info
    products: [
      {
        name: { type: String, required: true },
        category: { type: String, required: true }, // Example: "Clothing"
        subCategory: { type: String }, // Example: "Men" or "Women"
        price: Number,
        rating: { type: Number, default: 0 },
        description: String,
        image: String,
        stock: { type: Number, default: 10 },
      },
    ],

    // Wishlist
    wishlist: [
      {
        productId: String,
        name: String,
        category: String,
        subCategory: String,
        price: Number,
        image: String,
      },
    ],

    // Cart
    cart: [
      {
        productId: String,
        name: String,
        category: String,
        subCategory: String,
        price: Number,
        quantity: { type: Number, default: 1 },
        image: String,
      },
    ],

    // Orders
    orders: [
      {
        products: [
          {
            productId: String,
            name: String,
            category: String,
            subCategory: String,
            quantity: Number,
            price: Number,
          },
        ],
        totalPrice: Number,
        address: {
          fullName: String,
          phone: String,
          street: String,
          city: String,
          state: String,
          country: String,
          pincode: String,
        },
        status: { type: String, default: "Placed" },
        orderDate: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Ecommerce = mongoose.model("Ecommerce", ecommerceSchema);

module.exports = Ecommerce;
