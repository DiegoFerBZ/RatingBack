import express from "express";
import ProductController from "../controllers/product/product-ctr";
import { authVerification } from "../middlewares/auth-verification";

const productRouter = express.Router();

productRouter.post('/register',authVerification, ProductController.registerProduct);
productRouter.get('/', ProductController.getProductOrProducts);
productRouter.get('/comments', ProductController.getCommentsByProduct);
productRouter.post('/comment',authVerification, ProductController.makeAComment);

export default productRouter

