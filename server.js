const express = require('express');
const app = express();

const usersRouter = require('./components/users');

app.use(express.json());
const router = express.Router();

app.use(router);

router.use('/users', usersRouter);

app.listen(3000, function() {
    console.log('listening on 3000')
})