const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 5000;

const sliderData = require("./Data/Slider.json");
const chefData = require("./Data/chef.data.json");
const recipeCatagories = require("./Data/Recipe.catagories.json");
const latestRecipes = require("./Data/Latest.recipes.json");

app.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});

app.get("/home-slider", (req, res) => {
  res.send(sliderData);
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const dataById = chefData.find((cd) => cd.id === +id);
  res.send(dataById);
});

app.get("/catagories", (req, res) => {
  res.send(recipeCatagories);
});

app.get("/recipes", (req, res) => {
  res.send(latestRecipes);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT} `);
});
