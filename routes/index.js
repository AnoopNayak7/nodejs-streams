const express = require('express');
const router = express.Router();
const fs = require('fs');
const zlib = require('zlib')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodejs Streams' });
});

// fs.createReadStream('./assets/sample.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('./assests/sample.zip')))

// router.get('/streams', function(req, res, next) {
//   const stream = fs.createReadStream("./assets/sample.txt", "utf-8");
//   stream.on('data', (chunk) => res.write(chunk));
//   stream.on('end', () => res.end())
// });

module.exports = router;
