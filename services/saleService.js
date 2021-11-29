const sale = require('../models/saleModel');

const messages = {
  CODE: 'invalid_data',
  WRONG: 'Wrong product ID or invalid quantity',
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

module.exports = {
  create,
};