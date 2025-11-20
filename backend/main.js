// const express = require("express");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");
// const collegeRoutes = require("./routes/collegeRoutes");

// const app = express();
// app.use(express.json());

// // ✅ MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
//   .then(() => console.log("✅ MongoDB Connected..."))
//   .catch(err => console.error("❌ MongoDB connection failed:", err.message));

// // ✅ Routes
// app.use("/users", userRoutes);
// app.use("/colleges", collegeRoutes);

// // Root check
// app.get("/", (req, res) => res.send("API is running..."));

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
