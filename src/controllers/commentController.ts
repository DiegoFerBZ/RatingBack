import { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rating-db',
    password: 'admin',
    port: 5432,
});   
export const getComments = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM comments WHERE product_id = $1',
            [productId]
        );
        res.json(result.rows);  // Enviamos los comentarios como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los comentarios', error });
    }
};

export const addComment = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const { comment } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO comments (product_id, comment) VALUES ($1, $2) RETURNING *',
            [productId, comment]
        );
        res.status(201).json({ message: 'Comentario añadido', comment: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Error al añadir el comentario', error });
    }
};

