import React, { useEffect, useState } from "react";
import { getColleges } from "../api";

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [cutoff, setCutoff] = useState("");

  const fetchColleges = async () => {
    try {
      const res = await getColleges({
        name: search,
        location,
        minCutoff: cutoff,
      });
      setColleges(res.data);
    } catch (err) {
      console.error("Error fetching colleges:", err);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchColleges();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">College Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="College name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min cutoff"
          value={cutoff}
          onChange={(e) => setCutoff(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* Results */}
      <ul>
        {colleges.map((c) => (
          <li key={c._id} className="p-4 border rounded mb-2">
            <h2 className="font-semibold">{c.name} ({c.code})</h2>
            <p>📍 {c.location} | 🎓 {c.university}</p>
            <p>Courses: {c.courses.map((x) => x.name).join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Colleges;
