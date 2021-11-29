module.exports = (err, _req, res, _next) => {
  const stats = err.code === 'invalid_data' ? 422 : 404;
  res.status(stats).json({ err });
};

// Tive ajuda de um colega para a utilizacao do ternary operator nesse erro, estava tentando
// fazendo declarando duas const para cada erro e ele me indicou e explicou que assim e mais
// simples