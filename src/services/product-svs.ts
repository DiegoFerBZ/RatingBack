import { QueryFailedError } from "typeorm";
import { dataSource } from "../infrastructure/db-postgres";
import { BussinesException } from "../middlewares/exceptions/bussinesException";
import { Comment } from "../models/comment";
import { Product } from "../models/product";
import userSvs from "./user-svs";

class ProductService {
  productRepository = dataSource.getRepository(Product);
  commentRepository = dataSource.getRepository(Comment);

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.createQueryBuilder('product')
    .leftJoinAndSelect('product.user', 'user')
    .select([
      'product.id',
      'product.name',
      'product.description',
      'product.url_img',
      'product.review',
      'user.id',
      'user.username'
    ])
    .getMany();
  }

  async getProduct(id: number): Promise<Product> {
    const product=await this.productRepository.createQueryBuilder('product')
    .leftJoinAndSelect('product.user', 'user') // Si necesitas alguna relación
    .select([
      'product.id',
      'product.name',
      'product.description',
      'product.url_img',
      'product.review',
      'user.id',
      'user.username',
    ])
    .where('product.id = :id', { id })
    .getOne();

    if (!product) {
      throw new BussinesException('Producto no encontrado', 404);
    }
    return product;
  }

  async registerNewProduct(
    name: string,
    description: string,
    url_img: string,
    review: string,
    user_id: number
  ): Promise<Product> {
    const user = await userSvs.getUserById(user_id);
    const newProduct: Product = { name, description, url_img ,review,rating:5, user };
    return await this.productRepository.save(newProduct);
  }

  async makeAComment(content: string, user_id: number, product_id: number): Promise<Comment> {
    const user = await userSvs.getUserById(user_id);
    const product = await this.getProduct(product_id);
    const newComment:Comment = { content,user,product };
    try{
    return await this.commentRepository.save(newComment);
    }catch(error){
      if (error instanceof QueryFailedError && error.message.includes('duplicate key value violates unique constraint')) {
      throw new BussinesException('El producto ya tiene un comentario del usuario', 409);
      }
      throw new BussinesException('Error al registrar comentario', 500);
    }
  }

  async getCommentsByProduct(product_id: number): Promise<Comment[]> {
    return await this.commentRepository.createQueryBuilder('comment')
    .leftJoinAndSelect('comment.user', 'user')
    .select([
      'comment.id',
      'comment.content',
      'user.id',
      'user.username'
    ])
    .where('comment.productId = :product_id', { product_id })
    .getMany();
  }

}

export default new ProductService();
