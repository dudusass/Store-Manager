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

const update = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const updated = await service.update(id, name, quantity);

  if (updated.code) return next(updated);

  return res.status(200).json(updated);
});

const remove = rescue(async (req, res, next) => {
  const { id } = req.params;
  const removed = await service.remove(id);

  if (removed.code) return next(removed);

  res.status(200).json(removed);
});

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById,
};