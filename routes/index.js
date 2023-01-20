var express = require('express');
const controller = require('../controllers/home');
var router = express.Router();

/* GET home page. */

router.get('/', controller.home);

router.get('/contacto', controller.contacto);


module.exports = router;
