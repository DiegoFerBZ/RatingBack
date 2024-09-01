import { Request, Response, NextFunction } from 'express';

export function CatcherException(target: any) {
  // Iterar sobre las propiedades de la clase
  Object.getOwnPropertyNames(target.prototype).forEach((methodName) => {
    // Obtener el método original
    const originalMethod = target.prototype[methodName];
    
    // Si el método es una función
    if (typeof originalMethod === 'function') {
      // Reemplazar el método con una versión que maneja excepciones
      target.prototype[methodName] = async function (req: Request, res: Response, next: NextFunction) {
        try {
          // Llamar al método original
          await originalMethod.apply(this, [req, res, next]);
        } catch (error) {
          // Pasar el error al middleware de manejo de errores
          next(error);
        }
      };
    }
  });
}