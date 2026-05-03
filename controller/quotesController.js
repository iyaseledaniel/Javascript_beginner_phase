// control quotes display
const quotes = require('../model/quotesModel')

const getAllQuotes = (req, res) => {
    return res.status(200).json(quotes)
}

const getRandomQuotes = (req, res) => {
    let quoteLength = quotes.length
    while (quoteLength > 0){
        let randomIndex = Math.floor(Math.random() * quoteLength)
        let randomQuote = quotes[randomIndex]
        res.status(200).send(`<h1>Category: ${randomQuote.category}</h1>
            <h2><i>Quote: ${randomQuote.quote}</i></h2>`)
        quoteLength--;
    }
        
}

const getCategoryQuotes = (res, req) => {
    const category = req.params.category;
    let findQuotes = quotes.filter(cat => cat.category === category)

    if(!findQuotes){
        res.status(404).send(`<b>Category for ${category} quotes not found.</b>`)
    }else{
        res.status(200).json(findQuotes)
    }
}

module.exports = { getAllQuotes, getRandomQuotes, getCategoryQuotes}