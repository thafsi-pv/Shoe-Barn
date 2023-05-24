const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const productList = require("./productList.json");

app.get("/api/products", (req, res) => {
  res.json(productList);
});

app.get("/api/product/:id", (req, res) => {
  const { id } = req.params;
  const data = productList.filter((item) => item.id == id);
  res.json(data);
});

const PORT = 3006;
app.listen(PORT, () => console.log("server running"));
