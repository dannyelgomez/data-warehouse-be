const contactsRouter = require('express').Router()
const { createContact, getContactById, getContacts, updateContact, deleteContact, } = require('./contacts')
const { contactIdParams, contactExists, validateContact } = require('./contacts-util')

contactsRouter.post('/', validateContact, createContact);
contactsRouter.get('/:id', contactIdParams, getContactById);
contactsRouter.get('/', getContacts);
contactsRouter.put('/:id', contactIdParams, validateContact, contactExists, updateContact);
contactsRouter.delete('/:id', contactIdParams, contactExists, deleteContact);

module.exports = contactsRouter;