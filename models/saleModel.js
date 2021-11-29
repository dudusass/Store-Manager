const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (objArr) => {
  const newSale = await connection()
    .then((db) => db.collection('sales').insertOne({ itensSold: objArr }));

  const { insertedId } = newSale;
  return {
    _id: insertedId,
    itensSold: objArr,
  };
};

const getAll = async () => {
  const sales = await connection()
    .then((db) => db.collection('sales').find().toArray());

  return { sales };
};

const getById = async (id) => {
  const sale = await connection()
    .then((db) => db.collection('sales').findOne(new ObjectId(id)));

  return sale;
};

module.exports = {
  create,
  getAll,
  getById,
};