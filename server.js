const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 5000;

// Read JSON file once
const data = JSON.parse(fs.readFileSync("data.json"));

// 🔹 1. Get Personal Info
app.get("/personal/:field", (req, res) => {
  const field = req.params.field; // e.g. name, email, github
  if (data.personal[field]) {
    res.json({ [field]: data.personal[field] });
  } else {
    res.status(404).json({ error: "Field not found" });
  }
});

// 🔹 2. Get Freelancing Info
app.get("/freelancing/:field", (req, res) => {
  const field = req.params.field; // e.g. projectsCount, openSourceContribution
  if (data.freelancing[field] !== undefined) {
    res.json({ [field]: data.freelancing[field] });
  } else {
    res.status(404).json({ error: "Field not found" });
  }
});

// 🔹 3. Get All Projects
app.get("/projects", (req, res) => {
  res.json(data.projects);
});

// 🔹 4. Get Project by Title
app.get("/projects/:title", (req, res) => {
  const project = data.projects.find(
    (p) => p.title.toLowerCase() === req.params.title.toLowerCase()
  );
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
