const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

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