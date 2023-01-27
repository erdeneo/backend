const express = require('express');
const router = express.Router();
const { getUser, createUser, login, register } = require('../controller/users');

router.get('/', getUser);
router.post('/', register);
router.post('/login', login);

 module.exports = router;
