import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secretKey } from "../tools/utils/json-token";

export const authVerification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized, token is missing" });
  }

  // Verificar token
  try {
    const decoded = jwt.verify(token, secretKey) as {
      id: number;
      email: string;
    };
    req.user = { id: +decoded.id, email: decoded.email };
    next();

  } catch (error) {
    return res.status(403).json({ message: "Forbidden, token is expired" });
  }

};
