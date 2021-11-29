const rescue = require('express-rescue');
const Service = require('../services/saleService');

const create = rescue(async (req, res, next) => {
  const arrSale = req.body;
  const newSale = await Service.create(arrSale);

  if (newSale.code) return next(newSale);

  res.status(200).json(newSale);
});

module.exports = {
  create,
};