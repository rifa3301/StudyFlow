import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample resource data
const resources = [
  {
    id: 1,
    title: "Data Communication Basics",
    category: "CSE 513"
  },
  {
    id: 2,
    title: "C++ Programming",
    category: "Programming"
  },
  {
    id: 3,
    title: "Database Management System",
    category: "DBMS"
  }
];

// REST API endpoint
app.get("/api/resources", (req, res) => {
  res.json(resources);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});