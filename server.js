
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Middleware
app.use(express.json());
app.use(cors());

// 📁 SQLite DB File
const dbPath = path.resolve(__dirname, "users.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) return console.error("❌ Database connection failed:", err.message);
  console.log("✅ Connected to SQLite database.");
});

// 🧱 Create Users Table if not exists
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    phone TEXT
  )`,
  (err) => {
    if (err) console.error("❌ Table creation failed:", err.message);
  }
);

// 🔹 Signup Route
app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ success: false, error: "❌ All fields are required" });
  }

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, row) => {
    if (row) {
      return res.status(400).json({ success: false, error: "❌ Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password.toString(), 10);

    db.run(
      "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, phone],
      function (err) {
        if (err) {
          console.error("❌ Signup Error:", err.message);
          return res.status(500).json({ success: false, error: "❌ Internal Server Error" });
        }
        res.status(201).json({ success: true, message: "✅ User registered successfully" });
      }
    );
  });
});

// 🔹 Login Route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (!user) {
      return res.status(401).json({ success: false, error: "❌ Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "❌ Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      success: true,
      message: "✅ Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email, phone: user.phone },
    });
  });
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


