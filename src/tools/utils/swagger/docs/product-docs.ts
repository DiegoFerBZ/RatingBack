export const registerNewProduct = `
/**
 * @swagger
 * /products/register:
 *   post:
 *     summary: Register a new product
 *     description: Registers a new product in the system with the provided details.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product.
 *                 example: "Sample Product"
 *               description:
 *                 type: string
 *                 description: A brief description of the product.
 *                 example: "This is a detailed description of the sample product."
 *               url_img:
 *                 type: string
 *                 description: The URL of the product's image.
 *                 example: "http://example.com/image.jpg"
 *               review:
 *                 type: string
 *                 description: A review or additional notes about the product.
 *                 example: "This product has received positive feedback."
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user who is registering the product.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Product successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                   example: "Producto registrado con éxito."
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The unique identifier of the product.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The name of the product.
 *                       example: "Sample Product"
 *                     description:
 *                       type: string
 *                       description: The description of the product.
 *                       example: "This is a detailed description of the sample product."
 *                     url_img:
 *                       type: string
 *                       description: The URL of the product's image.
 *                       example: "http://example.com/image.jpg"
 *                     review:
 *                       type: string
 *                       description: Review or additional notes about the product.
 *                       example: "This product has received positive feedback."
 *                     user_id:
 *                       type: integer
 *                       description: The ID of the user who registered the product.
 *                       example: 1
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */`

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
 */`

 export const makeAComment = `
 /**
 * @swagger
 * /api/products/comment:
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
 *               user_id:
 *                 type: integer
 *                 description: ID del usuario que realiza el comentario.
 *                 example: 1
 *               product_id:
 *                 type: integer
 *                 description: ID del producto comentado.
 *                 example: 100
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
`