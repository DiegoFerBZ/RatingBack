import express from "express";
import UserController from "../controllers/user-ctr";

const authRouter = express.Router();

authRouter.post('/auth/register', UserController.registerUser);





export default authRouter