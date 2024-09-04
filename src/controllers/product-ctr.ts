import { Request, Response, NextFunction } from 'express';
import producSvs from '../services/product-svs'; 
import { CatcherException } from '../tools/decorators/catcherException';

@CatcherException
class ProductController {

    
    public async registerProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { name, description, url_img, createdAt } = req.body;
        const newProduct = await producSvs.registerNewUser(name, description, url_img, createdAt);
        res.status(200).json({message: 'Producto registrado con éxito.', product: newProduct});
    }


    public async getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
        const products = await producSvs.getProducts();
        res.status(200).json(products);
    }


    public async getProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { name } = req.body;
        const product = await producSvs.getProduct(name);
        res.status(200).json(product);
    }

}

export default new ProductController();