const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const walletRoute = require("./routes/walletRoute");
const Payment = require("./models/Payment");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/giftjoy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

// Save payment route
app.post("/api/payments", async (req, res) => {
  const { name, email, amount, message } = req.body;

  try {
    const newPayment = new Payment({ name, email, amount, message });
    await newPayment.save();
    res.status(201).json({ message: "Payment saved successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to save payment." });
  }
});

// Wallet route
app.use("/api/wallet", walletRoute);

// Default route
app.get("/", (req, res) => {
  res.send("GiftJoy backend is running.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
