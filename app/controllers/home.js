const createError = require('http-errors');
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
    let currencyPair = req.params.currencyPair.toUpperCase();
    client.getBuyPrice({'currencyPair': currencyPair}, function(err, price) {
      if (err) {next(new Error('404')); return;};
      res.render('index', {
        title: 'Pricing',
        data: price.data
      });
    });
  }
});

router.get('/', function(req, res, next) {
  // Process the data received in req.body
  res.redirect('/BTC-USD');
});
