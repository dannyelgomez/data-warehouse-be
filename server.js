const express = require('express');
const app = express();

const usersRouter = require('./components/users');
const citiesRouter = require('./components/cities');
const companiesRouter = require('./components/companies');
const contactsRouter = require('./components/contacts');

app.use(express.json());
const router = express.Router();

app.use(router);

router.use('/users', usersRouter);
router.use('/cities', citiesRouter);
router.use('/companies', companiesRouter);
router.use('/contacts', contactsRouter);

app.listen(3000, function() {
    console.log('listening on 3000')
})