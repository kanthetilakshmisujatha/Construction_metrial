const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5001',
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// User Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: String,
});

const User = mongoose.model("User", userSchema);

// 🔒 Auth Routes
// Signup
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ success: false, error: "❌ All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, error: "❌ Email already registered" });

    const hashedPassword = await bcrypt.hash(password.toString(), 10);
    await new User({ name, email, password: hashedPassword, phone }).save();
    res.status(201).json({ success: true, message: "✅ User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error.message);
    res.status(500).json({ success: false, error: "❌ Internal Server Error" });
  }
});

// Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, error: "❌ Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({
      success: true,
      message: "✅ Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ success: false, error: "❌ Internal Server Error" });
  }
});

// 📦 Material Recommendation System
const materialsDB = [
  { id: 1, name: 'Stainless Steel', durability: 9, cost: 8 },
  { id: 2, name: 'Carbon Fiber', durability: 8, cost: 9 },
  { id: 3, name: 'Recycled Plastic', durability: 6, cost: 4 }
];

const suppliersDB = {
  1: [{ supplier: 'Supplier A', price: 150, lead_time: 7 }],
  2: [{ supplier: 'Supplier B', price: 350, lead_time: 14 }],
  3: [{ supplier: 'Supplier C', price: 75, lead_time: 3 }]
};

const predictMaterial = (data) => {
  const score = data.temperature * 0.3 + data.humidity * 0.2 + data.stress * 0.1 - data.budget * 0.4;
  return score < 100 ? 1 : score < 200 ? 2 : 3;
};

app.post("/recommend", (req, res) => {
  try {
    console.log('Recommendation request:', req.body);
    if (!req.body) return res.status(400).json({ error: "Invalid request body" });

    const materialId = predictMaterial(req.body);
    const recommendation = materialsDB.find(m => m.id === materialId);
    if (!recommendation) return res.status(404).json({ error: "Material not found" });

    recommendation.suppliers = suppliersDB[materialId] || [];
    const comparison = materialsDB.map(({ id, ...rest }) => rest);

    res.json({ recommendation, comparison });
  } catch (error) {
    console.error('Recommendation Error:', error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});