import { Request, Response, NextFunction } from 'express';

interface HttpError extends Error {
  status?: number;
}

export function errorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`Error [${status}]: ${message}`);

  res.status(status).json({
    status,
    message,
  });

    next();
}