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

module.exports = {
  create,
  getByName,
};