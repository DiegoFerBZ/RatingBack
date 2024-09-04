import express from "express";
import ProductController from "../controllers/product/product-ctr";

const productRouter = express.Router();

productRouter.post('/register', ProductController.registerProduct);
productRouter.get('/', ProductController.getProductOrProducts);

export default productRouter

