const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT} `);
});
