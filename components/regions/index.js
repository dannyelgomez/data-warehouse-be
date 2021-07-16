const regionsRouter = require('express').Router()

const { createRegion, getRegionById, getRegions, updateRegion, deleteRegion } = require('./regions');
const { regionIdParams, regionExists, validateRegion } = require('./regions-util');

regionsRouter.post('/', validateRegion,  createRegion);
regionsRouter.get('/:id', regionIdParams, getRegionById);
regionsRouter.get('/', getRegions);
regionsRouter.put('/:id', regionIdParams, validateRegion, regionExists, updateRegion);
regionsRouter.delete('/:id', regionIdParams, regionExists, deleteRegion);

module.exports = regionsRouter;