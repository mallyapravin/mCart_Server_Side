const express = require('express');
const router = express.Router();
const Controller = require('../Controller/Controller')

router.post('/signup', Controller.signUp);
router.get('/products', Controller.viewProducts);

module.exports = router;