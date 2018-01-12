var express = require('express');

var path = require('path');
var fs = require('fs');

var csvParse = require('csv-parse/lib/sync');
var router = express.Router();

/* GET table page. */
router.get('/', function(req, res, next) {
  var file = fs.readFileSync(path.join(__dirname, '..', 'data', 'example_data.csv'));
  var data = csvParse(file, { columns: true });

  res.render('table', { title: 'Table',
                        data: data,
                        admin: (req.query.context == "admin") });
});

module.exports = router;
