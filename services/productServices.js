const { ObjectId } = require('mongodb');
const product = require('../models/productModel');

const messages = {
  CODE: 'invalid_data',
  NAME: '"name" length must be at least 5 characters long',
  EXISTS: 'Product already exists',
  QUANTITY: '"quantity" must be a number',
  ONE: '"quantity" must be larger than or equal to 1',
  WRONG: 'Wrong id format',
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

const getAll = async () => {
  const products = await product.getAll();

  return { products };
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return response(messages.CODE, messages.WRONG);
  const products = await product.getById(id);

  if (!products.name) return response(messages.CODE, messages.WRONG);

  return products;
};

module.exports = {
  create,
  getAll,
  getById,
};