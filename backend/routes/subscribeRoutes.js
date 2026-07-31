const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

router.post("/", async (req, res) => {
  try {
    const existing = await Subscriber.findOne({ email: req.body.email });
    if (existing) {
      return res.status(200).json({ message: "You're already subscribed!" });
    }
    const sub = new Subscriber({ email: req.body.email });
    await sub.save();
    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    res.status(400).json({ error: "Failed to subscribe" });
  }
});

module.exports = router;