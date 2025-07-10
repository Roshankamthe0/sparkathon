const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const payments = await Payment.find({ email });
    const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);
    res.json({ totalAmount });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
