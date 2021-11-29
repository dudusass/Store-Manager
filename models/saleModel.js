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

module.exports = {
  create,
};