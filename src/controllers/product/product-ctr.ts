import { Request, Response, NextFunction } from 'express';
import producSvs from '../../services/product-svs'; 
import { CatcherException } from '../../tools/decorators/catcherException';
import { ProductCreatedDTO } from './dtos/productExposed';
import { plainToClass } from 'class-transformer';
import { Product } from '../../models/product';

@CatcherException
class ProductController {

    
    public async registerProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { name, description, url_img, review,user_id } = req.body;
        const newProduct = await producSvs.registerNewProduct(name, description, url_img, review,user_id);
        const productDTO = plainToClass(ProductCreatedDTO, newProduct);
    
        res.status(201).json({message: 'Producto registrado con éxito.', product: productDTO});
    }

    public async getProductOrProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id ? +req.query.id : 0;
        if (id) {
            const product = await getProduct(id);
            res.status(200).json(product);
        } else {
            const products = await getProducts();
            res.status(200).json(products);
        }
    }

}

async function getProducts(): Promise<Product[]> {
    return await producSvs.getProducts();
}


async function getProduct(id:number): Promise<Product> {
    return await producSvs.getProduct(id);
}

export default new ProductController();