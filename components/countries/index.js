const countriesRouter = require('express').Router()

const { createCountry, getCountryById, getCountries, updateCountry, deleteCountry } = require('./countries');
const { countryIdParams, countryExists, validateCountry } = require('./countries-util');


countriesRouter.post('/', createCountry);
countriesRouter.get('/:id', countryIdParams, getCountryById);
countriesRouter.get('/', getCountries);
countriesRouter.put('/:id', countryIdParams, validateCountry, countryExists, updateCountry);
countriesRouter.delete('/:id', countryIdParams, countryExists, deleteCountry);

module.exports = countriesRouter;