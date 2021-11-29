const rescue = require('express-rescue');
const service = require('../services/saleService');

const create = rescue(async (req, res, next) => {
  const arrSale = req.body;
  const newSale = await service.create(arrSale);

  if (newSale.code) return next(newSale);

  res.status(200).json(newSale);
});

const getAll = rescue(async (_req, res, _next) => {
  const sales = await service.getAll();

  return res.status(200).json(sales);
});

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const sales = await service.getById(id);

  if (sales.code) return next(sales);

  return res.status(200).json(sales);
});

const update = rescue(async (req, res, next) => {
  const { id } = req.params;
  const sales = req.body;
  const updated = await service.update(id, sales);

  if (updated.code) return next(updated);

  return res.status(200).json(updated);
});

const remove = rescue(async (req, res, next) => {
  const { id } = req.params;
  const removed = await service.remove(id);

  if (removed.code) return next(removed);

  return res.status(200).json(removed);
});

module.exports = {
  create,
  update,
  remove,
  getAll,
  getById,
};