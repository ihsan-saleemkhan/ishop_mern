import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

// Route handler for the root URL
app.get("/", (req, res) => {
  res.send("API is running... :)");
});

//Product routes
app.use("/api/products", productRoutes);

//Custom error handling
app.use(notFound);
app.use(errorHandler);

// Start the server and listen for incoming requests on port 8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
