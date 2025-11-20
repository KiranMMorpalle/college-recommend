const express = require("express");
const User = require("../models/User");
const router = express.Router();

// POST /users → Register user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "✅ User created", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /users → Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // hide password
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
