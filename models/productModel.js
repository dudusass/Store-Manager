const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (name, quantity) => {
  const newProduct = await connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }));

  const { insertedId: _id } = newProduct;

  return {
    _id,
    name,
    quantity,
  };
};

const getByName = async (name) => {
  const product = await connection()
    .then((db) => db.collection('products').findOne({ name }));
  return product;
};

const getAll = async () => {
  const products = await connection()
    .then((db) => db.collection('products').find().toArray());

  return products;
};

const getById = async (id) => {
  const product = await connection()
    .then((db) => db.collection('products').findOne(new ObjectId(id)));

  return product;
};

const update = async (id, name, quantity) => {
  await connection()
    .then((db) => db.collection('products')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }));

  return {
    _id: id,
    name,
    quantity,
  };
};

const remove = async (id) => {
  await connection()
    .then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  create,
  update,
  remove,
  getByName,
  getAll,
  getById,
};