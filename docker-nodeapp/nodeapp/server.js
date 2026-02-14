const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));


// MongoDB Connection
const mongoURL =
  process.env.MONGO_URL ||
  "mongodb://admin:qwerty@mongodb:27017/mydb?authSource=admin";

mongoose.connect(mongoURL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));


// Schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);


// ROUTES

// signup route
app.post("/addUser", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.send("All fields are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send("⚠️ Email already registered");
    }

    await User.create({ email, username, password });

    res.send(`
      <h2>✅ Account Created Successfully</h2>
      <a href="/">Go Back</a>
    `);

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});


// view users (admin/testing)
app.get("/users", async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
