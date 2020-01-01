const chalk = require('chalk');
const SolutionNotFoundError = require('../errors/solution.error');

function errorLogger(err, req, res, next) {
    if (err.message) {
        console.log(chalk.red(err.message));
    }
    if (err.stack) {
        console.log(chalk.red(err.message));
    }
    next(err);
}


function solutionNotFoundErrorHandler(err, req, res, next) {
    if (err instanceof SolutionNotFoundError) {
        return res.sendStatus(400);
    }
    next(err);
}

function invalidParameterErrorHandler(err, req, res, next) {
    if(err instanceof InvalidParameterError) {
        return res.status(400).send(err.message);
    }
    next(err);
}

module.exports = function ErrorHandlingMiddleware(app) {
    app.use([
        errorLogger,
        solutionNotFoundErrorHandler,
        invalidParameterErrorHandler
    ]);
}