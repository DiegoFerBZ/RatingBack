import { Request, Response, NextFunction } from 'express';
import producSvs from '../../services/product-svs'; 
import { CatcherException } from '../../tools/decorators/catcherException';
import { ProductCreatedDTO } from './dtos/productExposed';
import { plainToClass } from 'class-transformer';
import { Product } from '../../models/product';
import { Comment } from '../../models/comment';

@CatcherException
class ProductController {

    
    public async registerProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        const user_id: number = Number(req.user?.id ?? 0);
        const { name, description, url_img, review } = req.body;
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

    public async makeAComment(req: Request, res: Response, next: NextFunction): Promise<void> {
        const user_id: number = Number(req.user?.id ?? 0);
        const { content, product_id } = req.body;
        const newComment:Comment = await producSvs.makeAComment(content, user_id, product_id);
        res.status(201).json({message: 'Comentario registrado con éxito.', comment: {content}});
    }

    public async getCommentsByProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        const product_id = req.query.product_id ? +req.query.product_id : 0;
        const comments = await producSvs.getCommentsByProduct(+product_id);
        res.status(200).json(comments);
    }

}

async function getProducts(): Promise<Product[]> {
    return await producSvs.getProducts();
}


async function getProduct(id:number): Promise<Product> {
    return await producSvs.getProduct(id);
}

export default new ProductController();