const express = require("express");
const College = require("../models/College");
const router = express.Router();

// POST /colleges → Add new college
router.post("/", async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).json({ message: "✅ College created", college });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//-------------------------------

// GET /colleges?name=xyz&location=Mumbai&minCutoff=80
// router.get("/", async (req, res) => {
//   try {
//     const { name, location, minCutoff } = req.query;
//     let query = {};

//     if (name) query.name = new RegExp(name, "i"); // case-insensitive search
//     if (location) query.location = new RegExp(location, "i");
//     if (minCutoff) query["courses.cutoff"] = { $gte: Number(minCutoff) };

//     const colleges = await College.find(query);
//     res.json(colleges);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// GET /colleges?name=abc&code=C001&location=Mumbai&marks=80&category=GEN&university=SPPU&fees=100000
router.get("/colleges", async (req, res) => {
  try {
    const { name, code, location, marks, category, university, fees } = req.query;

    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" }; // case-insensitive search
    }
    if (code) {
      filter.code = code;
    }
    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }
    if (university) {
      filter.university = { $regex: university, $options: "i" };
    }
    if (category) {
      filter.category = category; // must match one in array
    }
    if (fees) {
      filter["courses.fees"] = { $lte: Number(fees) }; // course fees <= budget
    }
    if (marks) {
      filter["courses.cutoff"] = { $lte: Number(marks) }; // marks >= cutoff
    }

    const colleges = await College.find(filter);
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//--------------------------
// GET /colleges/:id → Get college by ID
router.get("/:id", async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) return res.status(404).json({ message: "College not found" });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /colleges/:id → Update college
router.put("/:id", async (req, res) => {
  try {
    const updated = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "College not found" });
    res.json({ message: "✅ College updated", college: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /colleges/:id → Delete college
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await College.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "College not found" });
    res.json({ message: "✅ College deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(req.query); 
    // Example: { name: 'abc', code: 'C001', location: 'Mumbai', ... }

    const filters = {};

    if (req.query.name) filters.name = req.query.name;
    if (req.query.code) filters.code = req.query.code;
    if (req.query.location) filters.location = req.query.location;
    if (req.query.university) filters.university = req.query.university;
    if (req.query.category) filters.category = req.query.category;
    if (req.query.fees) filters["courses.fees"] = Number(req.query.fees);
    if (req.query.marks) {
      // Example: fetch courses with cutoff <= marks
      filters["courses.cutoff"] = { $lte: Number(req.query.marks) };
    }

    const colleges = await College.find(filters);
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;




// const express = require("express");
// const College = require("../models/College");
// const router = express.Router();

// // POST /colleges
// router.post("/", async (req, res) => {
//   try {
//     const newCollege = new College(req.body);
//     await newCollege.save();
//     res.json({ message: "✅ College inserted", data: newCollege });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET /colleges
// router.get("/", async (req, res) => {
//   try {
//     const colleges = await College.find();
//     res.json(colleges);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
