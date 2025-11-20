const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  intake: Number,
  cutoff: Number,
  fees: Number,
});

const collegeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: String,
  university: String,
  category: [String], // GEN, OBC, SC, ST
  courses: [courseSchema],
});

module.exports = mongoose.model("College", collegeSchema);
