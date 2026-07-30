const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// GET all menu items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

// POST a new menu item (we'll use this once, manually, to seed data)
router.post("/", async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: "Failed to create menu item" });
  }
});

module.exports = router;