var express = require('express');
const controller = require('../controllers/home');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/prueba', controller.prueba )

module.exports = router;
