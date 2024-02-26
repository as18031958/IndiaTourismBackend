import express from "express";
import { loginContoller,registerController } from "../controllers/authControllers.js";
import data from '../models/Models.js'


const router = express.Router();

// products function to fetch data
const productsController = async (req, res) => {
  try {
    //   const { _id } = req.body; // Access ID from query parameters for GET request

    // Retrieve product data using findById
    const product = await data.find();

    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return; 
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// Routing
router.post("/register", registerController);
router.post("/login", loginContoller);
 router.get("/data", productsController); // Assign the products function



export default router;

