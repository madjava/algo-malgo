const { Router } = require('express');
const route = Router();

const infoService = require('../services/info.service');

route.get('/', (req, res) => {
    res.json(infoService.getSolutionsList());
});

route.get('/:solution', (req, res) => {
    const result = infoService.getSolutionInfo(req.params.solution);
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send(result); 
});

module.exports = route;