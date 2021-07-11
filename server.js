const express = require('express');
const app = express();

app.use(express.json());
const router = express.Router();

app.use(router);

app.listen(3000, function() {
    console.log('listening on 3000')
})