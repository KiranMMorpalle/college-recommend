// const express = require("express");
// const mongoose = require("mongoose");
// const College = require("./models/College");  // adjust path if needed
// const User = require("./models/User");        // adjust path if needed

// const app = express();
// app.use(express.json());

// // ✅ Connect Mongo
// mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
//   .then(() => console.log("✅ MongoDB Connected..."))
//   .catch(err => console.error("❌ MongoDB connection failed:", err.message));

// // ✅ Route 1: check server is alive
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ✅ Route 2: add a sample college
// app.post("/test-college", async (req, res) => {
//   try {
//     const newCollege = new College({
//       code: "C003",
//       name: "ABC Engineering College",
//       location: "Pune",
//       university: "SPPU",
//       category: ["GEN", "OBC"],
//       courses: [
//         { name: "IT", intake: 60, cutoff: 75, fees: 100000 },
//         { name: "Civil", intake: 40, cutoff: 65, fees: 90000 }
//       ]
//     });
//     await newCollege.save();
//     res.json({ message: "✅ College inserted", data: newCollege });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Route 3: get all colleges
// app.get("/colleges", async (req, res) => {
//   try {
//     const colleges = await College.find();
//     res.json(colleges);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Route 4: add user
// app.post("/test-user", async (req, res) => {
//   try {
//     const newUser = new User({
//       name: "Test User11",
//       email: "test11@example.com",
//       password: "123456"
//     });
//     await newUser.save();
//     res.json({ message: "✅ User inserted", data: newUser });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const collegeRoutes = require("./routes/collegeRoutes");

const app = express();
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch(err => console.error("❌ MongoDB connection failed:", err.message));

// ✅ Routes
app.use("/users", userRoutes);
app.use("/colleges", collegeRoutes);

// Root check
app.get("/", (req, res) => res.send("API is running..."));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
