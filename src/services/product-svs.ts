import { dataSource } from "../infrastructure/db-postgres";
import { BussinesException } from "../middlewares/exceptions/bussinesException";
import { Product } from "../models/product";
import userSvs from "./user-svs";

class ProductService {
  productRepository = dataSource.getRepository(Product);

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
      'user.username',
      'user.email',
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
      'user.id', // Solo trae estos campos del usuario si es necesario
      'user.name'
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

}

export default new ProductService();
