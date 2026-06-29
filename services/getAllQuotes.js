const { NotFoundError } = require("../errors")
const quotes = require("../model/quotesModel")

const getAllQuotesService = (reqData) => {
    const { sort, category } = reqData
    // console.log(typeof category, category)
    // console.log(Array.isArray(category))
    let html = ""
    let findQuotes = []
    if (sort) {
        console.log(sort)
        quotes.sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    if (category) {
        if (Array.isArray(category)) {
            findQuotes = quotes.filter(item =>
                category.includes(item.category)
            );
        } else {
            findQuotes = quotes.filter(item =>
                item.category === category
            );
        }
        if (findQuotes.length === 0) {
            throw new NotFoundError(`<h3>Category for ${category} quotes not found</h3>`);
            // throw new Error(`Category for ${category} quotes not found`)
            //return res.status(404).send(`<h1>Category for ${queryValue.category} quotes not found.</h1>`)
        } else {
            html = findQuotes.map(item => {
                return `<h3><i>Category: ${item.category}</i></h3>
                    <h2>Quote: ${item.quote}</h2><hr>
            `
            }).join("");
            return html
            //return res.status(200).send(html)
        }

    }

    html = quotes.map(item => {
        return `<h3><i>Category: ${item.category}</i></h3>
                <h2><b>Quote: ${item.quote}</b></h2><hr>
        `
    }).join("");

    return html
}

module.exports = getAllQuotesService;