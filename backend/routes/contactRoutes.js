const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");

// POST a new contact/reservation message
router.post("/", async (req, res) => {
  try {
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message received!" });
  } catch (err) {
    res.status(400).json({ error: "Failed to send message" });
  }
});

module.exports = router;