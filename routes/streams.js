const express = require('express');
const router = express.Router();
const streamHandler = require('../lib/streamHandler');

// Readable streams
router.get('/readableStream', (req, res) => {
  streamHandler(req, res, {
    sourceStreamType: 'readable',
    sourcePath: './assets/sample.txt',
    destinationPath: './assets/output.txt',
    compress: true,
  });
});

// Writeable streams
router.get('/writableStream', (req, res) => {
  streamHandler(req, res, {
    sourceStreamType: 'writable',
    sourcePath: './assets/sample.txt',
    destinationPath: './assets/output.txt',
    compress: true,
  });
});

// Duplex stream
router.get('/duplexStream', (req, res) => {
  streamHandler(req, res, {
    sourceStreamType: 'duplex',
    destinationPath: './assets/output.txt',
    compress: true,
  });
});

// Transform stream
router.get('/transformStream', (req, res) => {
  streamHandler(req, res, {
    sourceStreamType: 'transform',
    sourcePath: './assets/sample.txt',
    destinationPath: './assets/output.txt',
    compress: true,
  });
});

module.exports = router;
