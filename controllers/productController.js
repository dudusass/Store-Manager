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

module.exports = {
  create,
};