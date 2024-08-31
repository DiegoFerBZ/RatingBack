import express from "express";
import { Greeting, undefined404 } from "../controllers/user-ctr";

const userRouter = express.Router();

userRouter.get('/', Greeting);
userRouter.get('/prueba', undefined404);


export default userRouter