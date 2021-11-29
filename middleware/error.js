module.exports = (err, _req, res, _next) => {
  res.status(422).json({ err });
};