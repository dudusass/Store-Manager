const { ObjectId } = require('mongodb');
const sale = require('../models/saleModel');

const messages = {
  CODE: 'invalid_data',
  WRONG: 'Wrong product ID or invalid quantity',
  NOT_FOUND: 'not_found',
  SALE_NOT_FOUND: 'Sale not found',
  WRONG_ID: 'Wrong sale ID format',
};

const response = (code, message) => ({
  code,
  message,
});

const isValid = (arr = []) => {
  const result = arr
    .some((product) => product.quantity <= 0 || typeof product.quantity !== 'number');
  console.log(result);
  return result;
};

const create = async (objArr) => {
  if (isValid(objArr)) return response(messages.CODE, messages.WRONG);
  const newSale = await sale.create(objArr);

  return newSale;
};

const getAll = async () => {
  const sales = await sale.getAll();

  return sales;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return response(messages.NOT_FOUND, messages.SALE_NOT_FOUND);
  const sales = await sale.getById(id);
  console.log('content', sales);
  if (!sales) return response(messages.NOT_FOUND, messages.SALE_NOT_FOUND);

  return sales;
};

const update = async (id, objArr) => {
  if (isValid(objArr)) return response(messages.CODE, messages.WRONG);

  const updated = await sale.update(id, objArr);

  return updated;
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return response(messages.CODE, messages.WRONG_ID);
  const sales = await sale.getById(id);
  if (!sales) return response(messages.CODE, messages.WRONG_ID);

  await sale.remove(id);

  return sales;
};

module.exports = {
  create,
  update,
  getAll,
  getById,
  remove,
};