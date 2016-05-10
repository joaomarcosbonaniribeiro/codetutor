var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).sendFile(__dirname+"../public/index.html");
});

module.exports = router;
