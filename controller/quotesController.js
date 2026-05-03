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
        quoteLength--;
        return res.status(200).send(`<h1>Category: ${randomQuote.category}</h1>
            <h2><i>Quote: ${randomQuote.quote}</i></h2>`)
    }
        
}

const getCategoryQuotes = (req, res) => {
    const category = req.params.category;
    let findQuotes = quotes.filter(cat => cat["category"] === category)
    //console.log(findQuotes)

    if(findQuotes.length === 0){
        return res.status(404).send(`<h1>Category for ${category} quotes not found.</h1>`)
    }else{
        return res.status(200).json(findQuotes)
    }
}

module.exports = { getAllQuotes, getRandomQuotes, getCategoryQuotes}