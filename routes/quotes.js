const express = require('express');
const { getAllQuotes, getRandomQuotes, getCategoryQuotes } = require('../controller/quotesController');

const quoteRoutes = express.Router();

quoteRoutes.get('/', getAllQuotes);
quoteRoutes.get('/random', getRandomQuotes);
quoteRoutes.get('/:category', getCategoryQuotes);

module.exports = quoteRoutes;