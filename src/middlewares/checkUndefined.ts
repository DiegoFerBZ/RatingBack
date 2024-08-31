import { Request, Response, NextFunction } from "express";

export const checkUndefined = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Guardar la referencia original de res.json
  const originalJson = res.json;

  // Sobrescribir res.json
  res.json = function (data) {
    if (data === undefined) {
      return res.status(404).json({ message: "Resource not found" });
    }
    return originalJson.call(this, data);
  };

  next();
};
