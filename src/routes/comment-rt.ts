import express from 'express';
import { getComments, addComment } from '../controllers/commentController';

const router = express.Router();

router.get('/:productId/comments', getComments);
router.post('/:productId/comments', addComment);

export default router;

