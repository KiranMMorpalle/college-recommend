import axios from "axios";

// Backend base URL
const API = axios.create({
  baseURL: "http://localhost:5000", // your Express server
});

// --- Users ---
export const registerUser = (data) => API.post("/users", data);
export const getUsers = () => API.get("/users");

// --- Colleges ---
export const addCollege = (data) => API.post("/colleges", data);
export const getColleges = (filters = {}) => API.get("/colleges", { params: filters });
export const getCollegeById = (id) => API.get(`/colleges/${id}`);
export const updateCollege = (id, data) => API.put(`/colleges/${id}`, data);
export const deleteCollege = (id) => API.delete(`/colleges/${id}`);
