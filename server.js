const express = require('express')
const {getAllQuotes, getRandomQuotes, getCategoryQuotes} = require('./controller/quotesController')

const rateLimit = require("express-rate-limit");

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
// create get all quotes path
app.get('/quotes', getAllQuotes);

// routes for random quotes
app.get('/quotes/random', getRandomQuotes);


//routes for specific motivation

app.get('/quotes/:category', getCategoryQuotes)

app.listen(port, () =>{
    console.log(`Server is listening on port: ${port}`)
});