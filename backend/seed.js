const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require("dotenv").config();
const mongoose = require("mongoose");
const MenuItem = require("./models/MenuItem");

const items = [
  { name: "Cappuccino", description: "Espresso with steamed milk foam", price: 180, category: "Coffee" },
  { name: "Cold Brew", description: "Slow-steeped, smooth & bold", price: 200, category: "Coffee" },
  { name: "Butter Croissant", description: "Flaky, buttery, baked fresh daily", price: 120, category: "Pastries" },
  { name: "Blueberry Muffin", description: "Soft muffin loaded with blueberries", price: 140, category: "Pastries" },
  { name: "Avocado Toast", description: "Sourdough, smashed avocado, chili flakes", price: 220, category: "Breakfast", dietaryTag: "Vegan" },
  { name: "Classic Omelette", description: "Three eggs, herbs, toast on the side", price: 190, category: "Breakfast" },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await MenuItem.deleteMany();
  await MenuItem.insertMany(items);
  console.log("✅ Menu items seeded!");
  mongoose.disconnect();
});