const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

exports.getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();

  res.status(200).json({
    status: 'success',
    totalResult: allProducts.length,
    data: allProducts,
  });
});

exports.getProduct = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const product = await Product.findOne({ slug });
  res.status(200).json({
    status: 'success',
    data: product,
  });
});

exports.createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: newProduct,
  });
});
