import express from "express";
import ProductController from "../controllers/product-ctr";

const productRouter = express.Router();

productRouter.post('/product/register', ProductController.registerProduct);
productRouter.get('/product/products', ProductController.getProducts);
productRouter.get('/product/product', ProductController.getProduct);

export default productRouter

