const product = require('../models/productModel');

const messages = {
  CODE: 'invalid_data',
  NAME: '"name" length must be at least 5 characters long',
  EXISTS: 'Product already exists',
  QUANTITY: '"quantity" must be a number',
  ONE: '"quantity" must be larger than or equal to 1',
};

const response = (code, message) => ({
  code,
  message,
});

const create = async (name, quantity) => {
  const createProduct = await product.getByName(name);
  if (name.length < 5) return response(messages.CODE, messages.NAME);
  if (createProduct) return response(messages.CODE, messages.EXISTS);
  if (typeof quantity !== 'number') return response(messages.CODE, messages.QUANTITY);
  if (quantity < 1) return response(messages.CODE, messages.ONE);

  const newProduct = await product.create(name, quantity);
  return newProduct;
};

module.exports = {
  create,
};