export const registerUserDocs = `
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user in the system with the provided details.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *                 example: John
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 description: The password for the user.
 *                 example: password123
 *               lastname:
 *                 type: string
 *                 description: The last name of the user.
 *                 example: Doe
 *               username:
 *                 type: string
 *                 description: The username for the user.
 *                 example: johndoe
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The unique identifier for the user.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the user.
 *                   example: John
 *                 email:
 *                   type: string
 *                   description: The email of the user.
 *                   example: john.doe@example.com
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user.
 *                   example: Doe
 *                 username:
 *                   type: string
 *                   description: The username for the user.
 *                   example: johndoe
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */
`;

export const loginUserDocs = `
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     description: Authenticates a user and returns a JWT token if the credentials are correct.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the authenticated user.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTYyMDU0NjgwLCJleHBpcmFnZW4iOiJleHBpcmF0aW9uIiwiaWF0IjoxNTYyMDU0NjgwLCJleHBpcmFnZW4iOiJleHBpcmF0aW9uIn0.s5TrWqxhFUn2A2POzQ4N5kW14Y4-v7-yQOHV-e4ELbE"
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
`

export const getUserDocs = `
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get user information
 *     description: Retrieves the details of the authenticated user.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the user.
 *                   example: 1
 *                 username:
 *                   type: string
 *                   description: The username of the user.
 *                   example: johndoe
 *                 email:
 *                   type: string
 *                   description: The email of the user.
 *                   example: johndoe@example.com
 *                 name:
 *                   type: string
 *                   description: The first name of the user.
 *                   example: John
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user.
 *                   example: Doe
 *       401:
 *         description: Unauthorized, user must be authenticated
 *       500:
 *         description: Internal server error
 */
`;

export const editUserDocs = `
/**
 * @swagger
 * /user:
 *   put:
 *     summary: Edit user information
 *     description: Updates the authenticated user's profile details such as name, lastname, and username.
 *     tags:
 *       - User
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
 *                 description: The new first name of the user.
 *                 example: John
 *               lastname:
 *                 type: string
 *                 description: The new last name of the user.
 *                 example: Doe
 *               username:
 *                 type: string
 *                 description: The new username of the user.
 *                 example: johndoe
 *     responses:
 *       200:
 *         description: Successfully updated user information
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Usuario actualizado con éxito"
 *       401:
 *         description: Unauthorized, user must be authenticated or the user has been deleted
 *       500:
 *         description: Internal server error
 */
`;

export const deleteUserDocs = `
/**
 * @swagger
 * /user:
 *   delete:
 *     summary: Soft delete the authenticated user
 *     description: Marks the authenticated user as deleted by setting a deletion date. The user is not permanently removed from the system.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully marked the user as deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Usuario eliminado con éxito"
 *       401:
 *         description: Unauthorized, user is already deleted or not authenticated
 *       500:
 *         description: Internal server error
 */
`;

