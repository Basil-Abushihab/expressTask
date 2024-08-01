const express = require("express");
const { default: axios } = require("axios");

const app = express();
const port = 3001;

app.use("/products", (req, res, next) => {
  console.log("fetching data...");
  next();
});

app.get("/products", async (req, res) => {
  try {
    const data = (await axios.get("https://fakestoreapi.com/products")).data;

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  } catch (err) {
    console.error("Import error:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
