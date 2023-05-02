const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 5000;

const chefData = require("./Data/chef.data.json");

app.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});
app.get("/chef", (req, res) => {
  res.send(chefData);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const dataById = chefData.find((cd) => cd.id === +id);
  res.send(dataById);
});
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT} `);
});
