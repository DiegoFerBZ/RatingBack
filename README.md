# Proyecto Node.js con Express y TypeScript

Este proyecto es una API desarrollada con Node.js, Express y TypeScript. Utiliza una base de datos PostgreSQL para almacenar datos. La documentación de la API está disponible en formato Swagger.

## Requisitos previos

1. **Node.js**: Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. **PostgreSQL**: Deberás tener PostgreSQL instalado y configurado con una base de datos ya creada.

## Configuración del entorno

Debes configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

`.env`
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_de_datos
PORT=3000

## Ejecución del proyecto

Para ejecutar el proyecto, sigue estos pasos:

1. Instala las dependencias del proyecto con el siguiente comando:

    ```bash
    npm install
    ```

2. Ejecuta el proyecto en modo de desarrollo con:

    ```bash
    npm run dev
    ```
