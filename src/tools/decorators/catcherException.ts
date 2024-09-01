import { Request, Response, NextFunction } from 'express';

export function CatcherException(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
    try {
      await originalMethod.apply(this, [req, res, next]);
    } catch (error) {
      next(error);
    }
  };
}
