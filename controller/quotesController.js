// control quotes display
const quotes = require('../model/quotesModel')

const getAllQuotes = (req, res) => {
    const html = quotes.map(item => {
        return `<h3><i>Category: ${item.category}</i></h3>
                <h2><b>Quote: ${item.quote}</b></h2><hr>
        `
    }).join("");
    return res.status(200).send(html)
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
        const html = findQuotes.map(item =>{
            return `<h3><i>Category: ${item.category}</i></h3>
                    <h2>Quotes: ${item.quote}</h2><hr>
            `
        }).join("");
        return res.status(200).send(html)
    }
}

module.exports = { getAllQuotes, getRandomQuotes, getCategoryQuotes}