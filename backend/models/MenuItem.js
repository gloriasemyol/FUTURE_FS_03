const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g. "Coffee", "Pastries", "Breakfast"
  dietaryTag: { type: String }, // e.g. "Vegan", "Gluten-Free" (optional)
  image: { type: String }, // image URL
});

module.exports = mongoose.model("MenuItem", menuItemSchema);