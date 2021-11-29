const rescue = require('express-rescue');
const service = require('../services/productServices');

const create = rescue(async (req, res, next) => {
  const { name, quantity } = req.body;

  const newProduct = await service.create(name, quantity);

  if (newProduct.code) {
    return next(newProduct);
  }

  return res.status(201).json(newProduct);
});

const getAll = async (_req, res) => {
  const products = await service.getAll();

  res.status(200).json(products);
};

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const product = await service.getById(id);

  if (product.code) return next(product);

  return res.status(200).json(product);
});

module.exports = {
  create,
  getAll,
  getById,
};