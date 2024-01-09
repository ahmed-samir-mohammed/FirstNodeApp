import { validationResult } from 'express-validator'
import jsend from 'jsend'
import Product from '../models/product.model.js'
import asyncWrapper from '../middlewares/asyncWrapper.js'
import { errHandeler } from '../utils/appErrorHandler.js'

// Get All Products
const getAllProducts = async (req, res) => {
    const query = req.query
    const pageNo = +query.pageNo || 1
    const pageSize = +query.pageSize || 2
    let skip = (pageNo - 1) * pageSize // => Count Of Items

    const data = await Product.find({}, { "__v": false }).limit(pageSize).skip(skip)
    res.json(jsend.success(data))
}

// Get Single Product
const getProduct = asyncWrapper(async (req, res, next) => {
    const product = await Product.findById(req.params.id, { "__v": false })
    if (!product) {
        return next(errHandeler('Product not found', 'fail', 404))
    } else res.json(jsend.success(product))
})

// Add New Product
const addProduct = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(errHandeler(errors.array(), 'fail', 400))
    }
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.status(201).json(jsend.success(newProduct))
})

// Update Product
const updateProduct = asyncWrapper(async (req, res) => {
    const product = await Product.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
    return res.status(200).json(jsend.success(product))
})

// Delete Product
const deleteProduct = asyncWrapper(async (req, res) => {
    const product = await Product.findOneAndDelete({ _id: req.params.id }).select({ "__v": false })
    return res.status(200).json(jsend.success(product))
})

export {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}