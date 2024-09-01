import { Request, Response } from 'express';
import { dataSource } from '../infrastructure/db-postgres';
import { Review } from '../models/review';

export const createReview = async (req: Request, res: Response) => {
  const { userId, productId, reviewText, rating } = req.body;

  // Validar rating para asegurar que esté entre 1 y 5
  if (!userId || !productId || !reviewText || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Todos los campos son requeridos y la calificación debe estar entre 1 y 5.' });
  }

  try {
    const reviewRepository = dataSource.getRepository(Review);

    const newReview = reviewRepository.create({
      userId,
      productId,
      reviewText,
      rating,
    });

    const result = await reviewRepository.save(newReview);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la reseña.' });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const reviewRepository = dataSource.getRepository(Review);
    const productIdNumber = Number(productId); // Convertir a número

    const reviews = await reviewRepository.find({
      where: { productId: productIdNumber },
    });

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las reseñas.' });
  }
};
