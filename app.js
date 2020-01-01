const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const infoRoute = require('./controllers/info.controller');
const solutionRoute = require('./controllers/solutions.controller');

const ErrorHandlingMiddleware = require('./middleware/error-handling');

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/info', infoRoute);
app.use('/solution', solutionRoute);

app.get('/', (req, res) => {
    res.redirect('/info');
});

app.use((req, res) => {
    return res.sendStatus(404);
});

ErrorHandlingMiddleware(app);

app.use((err, req, res, next) => {
    return res.sendStatus(500);
})

module.exports = app;