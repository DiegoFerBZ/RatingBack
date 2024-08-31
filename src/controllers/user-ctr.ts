import { Request,Response } from "express";
import userSvs from "../services/user-svs";

export const Greeting=(req: Request, res: Response)=>{
    const Gretting = userSvs.registerNewUser();
    res.json(Gretting);
}

export const undefined404=(req: Request, res: Response)=>{
    res.json("Hello World");
}