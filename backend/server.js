import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const app = express();

// Route handler for the root URL
app.get("/", (req, res) => {
  res.send("API is running... :)");
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
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
