const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Task 1 & 2: Main API Message
app.get("/api/message", (req, res) => {
  res.json({
    message: "My first API works!", 
    course: "Browser Programming",  
    year: 2026,                     
    time: new Date().toLocaleTimeString()
  });
});

// Task 3: Student Endpoint
app.get("/api/student", (req, res) => {
  res.json({
    name: "Amrit Singh", 
    role: "Student",
    status: "Learning Backend 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});