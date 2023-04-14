import express from "express";
import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//@desc Fetch all products
//@route GET api/products
//@access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc Fetch single products
//@route GET api/products/:id
//@access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;