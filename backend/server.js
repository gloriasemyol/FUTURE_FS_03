// 1. Configure DNS resolution override
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// 2. Load environment variables
require("dotenv").config();

// 3. Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 4. Import routes
const menuRoutes = require("./routes/menuRoutes");
const contactRoutes = require("./routes/contactRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");

// 5. Initialize Express app
const app = express();

// 6. Global Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://future-fs-03.vercel.app"],
  })
);
app.use(express.json());

// 7. API Routes
app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscribeRoutes);

// 8. Connect to Database & Start Server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));