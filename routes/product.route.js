import { Router } from 'express';
import { body } from 'express-validator';
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/product.controller.js';
import validator from '../middlewares/product.validation.js';
export const productRouter = Router();

productRouter.route('/')
    .get(getAllProducts)
    .post([validator('title', 5), body('price').notEmpty()], addProduct)

productRouter.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

// export default router;