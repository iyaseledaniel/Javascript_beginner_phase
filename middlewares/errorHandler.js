const { CustomAPIError } = require("../errors")
const {StatusCodes} = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.send(err.message);
        // return res.status(err.statusCode).json({msg: err.message});
    }
    console.log(err.statusCode,err.message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "Something went wrong"});
}

module.exports = errorHandler;