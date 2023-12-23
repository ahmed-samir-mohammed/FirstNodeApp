const { validationResult } = require('express-validator')
const Product = require('../models/product.model')

// Get All Products
const getAllProducts = async (req, res) => {
    const data = await Product.find()
    res.json(data)
}

// Get Single Product
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        !product
            ? res.status(404).json({ message: 'Product not found' })
            : res.json(product)
    } catch (error) {
        return res.status(400).json({ message: 'Invalid ID' || error.message })
    }
}

// Add New Product
const addProduct = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.status(201).json(newProduct)
}

// Update Product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.updateOne({ _id: req.params.id }, {$set: {...req.body}})
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({ error: error })
    }
}

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.deleteOne({ _id: req.params.id })
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({ error: error })
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}