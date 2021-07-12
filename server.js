const express = require('express');
const app = express();

const usersRouter = require('./components/users');
const citiesRouter = require('./components/cities');

app.use(express.json());
const router = express.Router();

app.use(router);

router.use('/users', usersRouter);
router.use('/cities', citiesRouter);

app.listen(3000, function() {
    console.log('listening on 3000')
})