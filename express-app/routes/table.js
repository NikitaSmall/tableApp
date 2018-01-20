var express = require('express');

var path = require('path');
var fs = require('fs');

var parse = require('csv-parse');
var router = express.Router();

var exampleDataFilePath = path.join(__dirname, '..', 'data', 'example_data.csv');

/* GET table page. */
router.get('/', function(req, res, next) {
  fs.readFile(exampleDataFilePath, function(err, fileContent) {
    if (err) throw err;

    parse(fileContent, { columns: true }, function(err, data) {
      if (err) throw err;

      res.render('table', { title: 'Table',
                            data: data,
                            admin: (req.query.context == "admin") });
    });
  });
});

module.exports = router;
