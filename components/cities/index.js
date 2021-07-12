const citiesRouter = require('express').Router()

const { createCity, getCityById, getCities, updateCity, deleteCity } = require('./cities');
const { validateCity, cityIdParams, cityExists } = require('./cities-util');


citiesRouter.post('/', validateCity, createCity);
citiesRouter.get('/:id', cityIdParams, getCityById);
citiesRouter.get('/', getCities);
citiesRouter.put('/:id', cityIdParams, validateCity, cityExists, updateCity);
citiesRouter.delete('/:id', cityIdParams, cityExists, deleteCity);

module.exports = citiesRouter;