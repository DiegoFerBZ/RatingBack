export const registerNewProduct = `
/**
 * @swagger
 * /products/register:
 *   post:
 *     summary: Registrar un nuevo producto
 *     description: Crea un nuevo producto con la información proporcionada. Este endpoint está protegido por un token de autorización en el header 'Authorization'.
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del producto.
 *                 example: "Smartphone"
 *               description:
 *                 type: string
 *                 description: Descripción del producto.
 *                 example: "Un smartphone con gran batería y cámara."
 *               url_img:
 *                 type: string
 *                 description: URL de la imagen del producto.
 *                 example: "https://example.com/product-image.jpg"
 *               review:
 *                 type: string
 *                 description: Opinión o reseña del producto.
 *                 example: "Este producto es excelente para su precio."
 *     responses:
 *       201:
 *         description: Producto registrado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                   example: "Producto registrado con éxito."
 *                 product:
 *                   type: object
 *                   description: Detalles del producto registrado.
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del producto.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: Nombre del producto.
 *                       example: "Smartphone"
 *                     description:
 *                       type: string
 *                       description: Descripción del producto.
 *                       example: "Un smartphone con gran batería y cámara."
 *                     url_img:
 *                       type: string
 *                       description: URL de la imagen del producto.
 *                       example: "https://example.com/product-image.jpg"
 *                     review:
 *                       type: string
 *                       description: Opinión o reseña del producto.
 *                       example: "Este producto es excelente para su precio."
 *       400:
 *         description: Datos de entrada inválidos.
 *       401:
 *         description: No autorizado. El token de autorización es inválido o no se proporcionó.
 *       500:
 *         description: Error interno del servidor.
 */

`;

export const getProductOrProducts = ` 
/**
 * @swagger
* /products:
 *   get:
 *     summary: Retrieve a product or a list of products
 *     description: Returns a product by ID if an ID is provided as a query parameter, otherwise returns a list of all products.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: The ID of the product to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved product(s)
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The ID of the product.
 *                     name:
 *                       type: string
 *                       description: The name of the product.
 *                     description:
 *                       type: string
 *                       description: The description of the product.
 *                     url_img:
 *                       type: string
 *                       description: The URL of the product's image.
 *                     review:
 *                       type: string
 *                       description: The product's review.
 *                     user_id:
 *                       type: integer
 *                       description: The ID of the user who created the product.
 *                 - type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The ID of the product.
 *                       name:
 *                         type: string
 *                         description: The name of the product.
 *                       description:
 *                         type: string
 *                         description: The description of the product.
 *                       url_img:
 *                         type: string
 *                         description: The URL of the product's image.
 *                       review:
 *                         type: string
 *                         description: The product's review.
 *                       user_id:
 *                         type: integer
 *                         description: The ID of the user who created the product.
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */`;

export const makeAComment = `
 /**
 * @swagger
 * /products/comment:
 *   post:
 *     summary: Crear un nuevo comentario
 *     description: Permite a un usuario registrar un comentario para un producto específico.
 *     tags:
 *       - Comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Contenido del comentario.
 *                 example: "Este es un excelente producto"
 *               product_id:
 *                 type: integer
 *                 description: ID del producto comentado.
 *                 example: 1
 *     responses:
 *       201:
 *         description: Comentario registrado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Comentario registrado con éxito.
 *                 comment:
 *                   type: object
 *                   properties:
 *                     content:
 *                       type: string
 *                       example: "Este es un excelente producto"
 *       400:
 *         description: Error en los datos de entrada
 *       500:
 *         description: Error interno del servidor
 */
`;

export const getCommentsByProduct = `
/**
 * @swagger
 * /products/comments:
 *   get:
 *     summary: Obtener comentarios de un producto
 *     description: Devuelve todos los comentarios asociados a un producto específico, identificados por el ID del producto.
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: query
 *         name: product_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del producto para el que se quieren obtener los comentarios.
 *         example: 100
 *     responses:
 *       200:
 *         description: Comentarios obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del comentario
 *                     example: 1
 *                   content:
 *                     type: string
 *                     description: El contenido del comentario.
 *                     example: "Este es un excelente producto"
 *                   user_id:
 *                     type: integer
 *                     description: ID del usuario que hizo el comentario
 *                     example: 1
 *                   product_id:
 *                     type: integer
 *                     description: ID del producto comentado
 *                     example: 100
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha en que se hizo el comentario
 *                     example: "2023-09-04T12:00:00Z"
 *       400:
 *         description: Error en los parámetros de entrada
 *       500:
 *         description: Error interno del servidor
 */
`;
