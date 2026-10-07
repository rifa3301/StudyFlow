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
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    category: "DSA"
  },
  {
    id: 5,
    title: "Object Oriented Programming",
    category: "CSE 211"
  },
  {
    id: 6,
    title: "Digital Logic Design",
    category: "CSE 321"
  }
];

// REST API endpoint with pagination
app.get("/api/resources", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedResources = resources.slice(startIndex, endIndex);

  const totalPages = Math.ceil(resources.length / limit);

  res.json({
    page: page,
    limit: limit,
    totalItems: resources.length,
    totalPages: totalPages,
    resources: paginatedResources
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});