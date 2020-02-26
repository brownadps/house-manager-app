import Express from 'express';

const PORT = process.env.PORT;

const app = Express();

app.get('/api', (req, res) => res.send({}));

if (process.env.NODE_ENV !== 'production') {
  const proxy = require('express-http-proxy');
  app.use('/', proxy('http://client:3000'));
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});