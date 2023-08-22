import express from 'express';
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable';
import { productFiltersController } from './../controllers/productController.js';
const router = express.Router();

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

//get products
router.get('/get-product', getProductController);

//single product
router.get('/get-product/:slug', getSingleProductController);


//delete product
router.delete('/delete-product/:pid', deleteProductController);

//update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);


//get photo
router.get('/product-photo/:pid', productPhotoController);
export default router;

//filter product
router.get('/product-filters',productFiltersController);