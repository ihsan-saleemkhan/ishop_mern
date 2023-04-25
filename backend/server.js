import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Route handler for the root URL
app.get("/", (req, res) => {
  res.send("API is running... :)");
});

//Product routes
app.use("/api/products", productRoutes);

//Users routes
app.use("/api/users", userRoutes);

//Orders routes
app.use("/api/orders", orderRoutes);

//Upload routes
app.use("/api/upload", uploadRoutes);

//Make folder static
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//Paypal routes
app.use("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

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
