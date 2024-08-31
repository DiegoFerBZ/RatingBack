import { Request, Response } from "express";
import userSvs from "../services/user-svs";

export const Greeting = (req: Request, res: Response) => {
  const Gretting = "Hello World";
  res.json(Gretting);
};

export const undefined404 = (req: Request, res: Response) => {
  res.json("Hello World 2");
};

export const Test = (req: Request, res: Response) => {
  res.json("Saludando desde otro punto");
};

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password,lastname,username } = req.body;
    const newUser = await userSvs.registerNewUser(name, email, password,lastname,username);
    res.json(newUser);
};
