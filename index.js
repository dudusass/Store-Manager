const express = require('express');
const bodyParser = require('body-parser');
const error = require('./middleware/error');
const productRouter = require('./router/productRouter');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use('/products', productRouter);
app.use(error);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));