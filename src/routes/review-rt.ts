import { Router } from 'express';
import { createReview, getReviews } from '../controllers/reviewControllers';

const reviewRouter = Router();

reviewRouter.post('/reviews', createReview);
reviewRouter.get('/reviews/:productId', getReviews);

export default reviewRouter;
