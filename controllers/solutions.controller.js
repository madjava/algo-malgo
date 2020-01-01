const { Router } = require('express');
const route = Router();
const solutionsService = require('../services/solutions.service.js');

route.post('/:solution', async (req, res, next) => {
    const solution = req.params.solution;
    const options = req.body;
    try {
        const result = await solutionsService.result(solution, options);
        res.json(result);
    } catch (e) {
        next(e);
    }
});

module.exports = route;