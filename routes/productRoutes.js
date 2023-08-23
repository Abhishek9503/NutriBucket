
import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  productCountController,
  productListController,
  updateProductController,
  productFiltersController // Move this import here
} from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();


router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);
router.get('/get-product', getProductController);
router.get('/get-product/:slug', getSingleProductController);
router.delete('/delete-product/:pid', deleteProductController);
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);
router.get('/product-photo/:pid', productPhotoController);
//filter product
router.post("/product-filters", productFiltersController);

//product per page
router.get("/product-list/:page", productListController);


//product count
router.get("/product-count", productCountController);

export default router;
