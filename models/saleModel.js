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

const update = async (id, objArr) => {
  await connection()
    .then((db) => db.collection('sales')
      .updateOne({ _id: ObjectId(id) }, { $set: { itensSold: objArr } }));

  return {
    _id: id,
    itensSold: objArr,
  };
};

const remove = async (id) => {
  await connection()
    .then((db) => db.collection('sales').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  create,
  update,
  getAll,
  getById,
  remove,
};