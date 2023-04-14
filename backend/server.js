const express = require("express");
const products = require("./data/products");

const app = express();

// Route handler for the root URL
app.get("/", (req, res) => {
  res.send("API is running...");
});

// get the products list
app.get("/api/products", (req, res) => {
  res.json(products);
});

// get the product by id
app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Start the server and listen for incoming requests on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
