import express from "express";
import { registerUser } from "../controllers/user-ctr";

const authRouter = express.Router();

authRouter.post('/auth/register', registerUser);





export default authRouter