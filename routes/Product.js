import { getProducts,getProductById,createProduct,updateProduct,deleteProduct } from "../controllers/product.js";
import express from "express";
import protect from "../middlewares/authMidlleware.js";

const router = express.Router();

router.get("/",getProducts);
router.get("/:_id",protect,getProductById);
router.post("/",protect,createProduct);
router.put("/:_id",protect,updateProduct);
router.delete("/:_id",protect,deleteProduct);

export default router;