// src/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

// Configuración de Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Rating APP',
    version: '1.0.0',
    description: 'Documentation for the API',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

// Opciones para Swagger JSDoc
const options = {
  swaggerDefinition,
  apis: ['./src/tools/utils/swagger/docs/*.ts'], // Ruta a tus archivos de rutas para documentación
};

// Inicialización de Swagger JSDoc
const swaggerSpec = swaggerJSDoc(options);

// Función para usar Swagger en Express
export const setupSwagger = (app: Application): void => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
