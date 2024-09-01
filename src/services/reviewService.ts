import { dataSource } from "../infrastructure/db-postgres";
import { Review } from "../models/review";

class ReviewService {
  private reviewRepository = dataSource.getRepository(Review);

  async createReview(
    userId: number,
    productId: number,
    reviewText: string,
    rating: number
  ): Promise<Review> {
    const newReview = this.reviewRepository.create({
      userId,
      productId,
      reviewText,
      rating,
    });
    return this.reviewRepository.save(newReview);
  }

  async getReviews(productId: number): Promise<Review[]> {
    return this.reviewRepository.find({
      where: { productId },
    });
  }
}

export default new ReviewService();
