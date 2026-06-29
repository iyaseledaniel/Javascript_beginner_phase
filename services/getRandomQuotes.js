const quotes = require("../model/quotesModel");


const getRandomQuotesService = ()=>{
    let quoteLength = quotes.length
    while (quoteLength > 0) {
        let randomIndex = Math.floor(Math.random() * quoteLength)
        let randomQuote = quotes[randomIndex]
        quoteLength--;
        return (`<h1>Category: ${randomQuote.category}</h1>
            <h2><i>Quote: ${randomQuote.quote}</i></h2>`)
    }
}
module.exports = getRandomQuotesService