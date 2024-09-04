import { dataSource } from "../infrastructure/db-postgres";
import { Product } from "../models/product";

class ProductService {
  productRepository = dataSource.getRepository(Product);

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getProduct(name: string): Promise<Product[]> {
    return await this.productRepository.findBy({ name });
  }

  async registerNewProduct(
    name: string,
    description: string,
    url_img: string,
    createdAt: string
  ): Promise<Product> {
    const newProduct: Product = { name, description, url_img, createdAt };
    return await this.productRepository.save(newProduct);
  }

}

export default new ProductService();
