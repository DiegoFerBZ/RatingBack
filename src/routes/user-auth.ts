import express from "express";
import { authVerification } from "../middlewares/auth-verification";
import UserController from "../controllers/user/user-ctr";


const userRouter = express.Router();

userRouter.get('/',authVerification, UserController.getUser);
userRouter.put('/',authVerification, UserController.editUser);
userRouter.delete('/',authVerification, UserController.deleteUser);



export default userRouter