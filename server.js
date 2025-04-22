// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ Connect to MongoDB with better error handling
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err.message);
//     process.exit(1);
//   });

// // ✅ User Schema
// const UserSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", UserSchema);

// // ✅ Signup API
// app.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ msg: "⚠️ All fields are required" });
//     }

//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: "⚠️ User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ msg: "✅ User registered successfully" });
//   } catch (err) {
//     console.error("❌ Signup Error:", err);
//     res.status(500).json({ error: "❌ Internal Server Error" });
//   }
// });

// // ✅ Login API
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ msg: "⚠️ Email and Password required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: "⚠️ Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "⚠️ Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     console.error("❌ Login Error:", err);
//     res.status(500).json({ error: "❌ Internal Server Error" });
//   }
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bcrypt = require("bcrypt");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection (Updated)
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // User Model (Embedded in the same file)
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   phone: String,
// });

// const User = mongoose.model("User", userSchema);

// // Signup Route (Updated)
// app.post("/api/auth/signup", async (req, res) => {
//   try {
//     const { name, email, password, phone } = req.body;

//     if (!name || !email || !password || !phone) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already registered" });
//     }

//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);

//     const newUser = new User({ name, email, password: hashedPassword, phone });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Signup Error:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// app.post("/api/auth/login", async (req, res) => {
//   try {
//     console.log("Login request received:", req.body);

//     const { email, password } = req.body;
    
//     // Check if email exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("User not found:", email);
//       return res.status(401).json({ error: "User not found" });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log("Invalid password for user:", email);
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

//     console.log("User authenticated successfully:", email);
//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     console.error("Login Error:", error.message);
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;
// const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // User Schema & Model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   phone: String,
// });

// const User = mongoose.model("User", userSchema);

// // Signup Route
// app.post("/api/auth/signup", async (req, res) => {
//   try {
//     const { name, email, password, phone } = req.body;

//     if (!name || !email || !password || !phone) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already registered" });
//     }

//     const hashedPassword = await bcrypt.hash(password.toString(), 10);
//     const newUser = new User({ name, email, password: hashedPassword, phone });

//     await newUser.save();
//     res.status(201).json({ message: "✅ User registered successfully" });
//   } catch (error) {
//     console.error("Signup Error:", error.message);
//     res.status(500).json({ error: "❌ Internal Server Error" });
//   }
// });

// // Login Route (Updated)
// app.post("/api/auth/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ error: "Invalid email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ error: "Invalid email or password" });
//     }

//     // ✅ No password length check, just verify email & password
//     res.status(200).json({ message: "✅ Login successful" });
//   } catch (error) {
//     console.error("Login Error:", error.message);
//     res.status(500).json({ error: "❌ Internal Server Error" });
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });const express = require("express");
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
app.use(cors());
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, clientOptions)
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

// 🔹 **Signup Route**
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ success: false, error: "❌ All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: "❌ Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password.toString(), 10);
    const newUser = new User({ name, email, password: hashedPassword, phone });

    await newUser.save();
    res.status(201).json({ success: true, message: "✅ User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error.message);
    res.status(500).json({ success: false, error: "❌ Internal Server Error" });
  }
});

// 🔹 **Login Route (Fixed)**
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, error: "❌ Invalid email or password" });
    }

    // ✅ 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "❌ Invalid email or password" });
    }

    // ✅ 3. Generate JWT Token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      success: true,
      message: "✅ Login successful",
      token, // Send token for authentication
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ success: false, error: "❌ Internal Server Error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

