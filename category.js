const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/category', (request, response) => {
        response.send("list of category");
    });



module.exports = router;