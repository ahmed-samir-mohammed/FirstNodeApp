const express = require('express');
const { body } = require('express-validator')
const { getAllProducts, addProduct, deleteProduct, updateProduct, getProduct } = require('../controllers/product.controller')
const validator = require('../middlewares/product.validation')
const router = express.Router();

router.route('/')
    .get(getAllProducts)
    .post([validator('title'), body('price').notEmpty()], addProduct)

router.route('/:id')
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct)

module.exports = router;