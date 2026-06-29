// control quotes display
const { NotFoundError } = require('../errors');
const asyncWrapper = require('../middlewares/sync')
let quotes = require('../model/quotesModel');
const { getAllQuotesService, getRandomQuotesService, getCategoryQuotesService } = require('../services');

const getAllQuotes = asyncWrapper((req, res, next) => {
    const html =  getAllQuotesService(req.query)
   
    return res.status(200).send(html)
});

const getRandomQuotes = asyncWrapper((req, res, next) => {
    const html = getRandomQuotesService();
    return res.status(200).send(html);

});

const getCategoryQuotes = asyncWrapper((req, res, next) => {
    const html = getCategoryQuotesService(req.params)
    return res.status(200).send(html)
});

module.exports = { getAllQuotes, getRandomQuotes, getCategoryQuotes }