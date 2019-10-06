const express = require('express');
const router = express.Router();
const Client = require('coinbase').Client;
const client = new Client({
  'apiKey': 'API KEY',
  'apiSecret': 'API SECRET'
});

module.exports = (app) => {
  app.use('/', router);
};

router.get('/:currencyPair', (req, res, next) => {
  if (req.params.currencyPair){
    client.getBuyPrice({'currencyPair': req.params.currencyPair}, function(err, price) {
      res.render('index', {
        title: 'Pricing',
        data: price.data
      });
    });
  }
  res.status(500);
});

router.get('/', function(req, res, next) {
  // Process the data received in req.body
  res.redirect('/BTC-USD');
});
