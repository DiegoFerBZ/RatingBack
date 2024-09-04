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