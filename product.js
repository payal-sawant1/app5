const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/product', (request, response) => {
    
        response.send("list of product");
    });


router.post('/product', (request, response) => {
        response.send("product created");
    });



module.exports = router;