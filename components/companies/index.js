const companiesRouter = require('express').Router()

const { createCompany, getCompanies, updateCompany, deleteCompany, getCompanyById } = require('./companies');
const { companyIdParams, companyExists, validateCompany } = require('./companies-util')

companiesRouter.post('/', validateCompany, createCompany);
companiesRouter.get('/:id', companyIdParams, getCompanyById);
companiesRouter.get('/', getCompanies);
companiesRouter.put('/:id', companyIdParams, validateCompany, companyExists, updateCompany);
companiesRouter.delete('/:id', companyIdParams, companyExists, deleteCompany);

module.exports = companiesRouter;