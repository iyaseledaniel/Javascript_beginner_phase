const express = require('express')
const {getAllQuotes, getRandomQuotes, getCategoryQuotes} = require('./controller/quotesController')

const rateLimit = require("express-rate-limit");
const quoteRoutes = require('./routes/quotes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 10 // limit each IP
});

const port = 4040;
const app = express()

app.use(express.json());
app.use(limiter);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Quotes world </h1>")
})
app.use('/quotes', quoteRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server is listening on port: ${port}`)
});