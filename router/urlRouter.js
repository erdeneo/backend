const express = require('express');
const router = express.Router();
const {createUrl, getUrl, getHistory} = require("../controller/url")

router.post('/create', createUrl).get('/:id', getUrl).get('/history/:email', getHistory);

 module.exports = router;
