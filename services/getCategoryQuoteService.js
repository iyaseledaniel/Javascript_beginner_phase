const { NotFoundError } = require("../errors");
const quotes = require("../model/quotesModel");


const getCategoryQuotesService = (params) => {
    const category = params.category;
    let findQuotes = quotes.filter(cat => cat["category"] === category)
    //console.log(findQuotes)

    if (findQuotes.length === 0) {
        throw new NotFoundError(`<h3>Category for ${category} quotes not found.</h3>`)
        // return res.status(404).send(`<h1>Category for ${category} quotes not found.</h1>`)
    } else {
        const html = findQuotes.map(item => {
            return `<h3><i>Category: ${item.category}</i></h3>
                    <h2>Quotes: ${item.quote}</h2><hr>
            `
        }).join("");
         return html;
    }
}

module.exports = getCategoryQuotesService