const {index} = require('./controller')
var express = require('express');

var router = express.Router();
/* GET home page. */
router.get('/', index);

module.exports = router;
