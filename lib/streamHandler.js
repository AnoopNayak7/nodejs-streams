// lib/streamHandler.js
const stream = require('stream');
const fs = require('fs');
const zlib = require('zlib');

function streamHandler(req, res, {
  sourceStreamType, // 'readable', 'writable', 'duplex', 'transform'
  sourcePath,
  destinationPath,
  compress = false,
  usePipeline = false,
  pipelineOptions = {}
}) {
  let sourceStream;

  switch (sourceStreamType) {
    case 'readable':
      sourceStream = fs.createReadStream(sourcePath);
      break;
    case 'writable':
      throw new Error('Cannot pipe a writable stream directly to response');
    case 'duplex':
      sourceStream = new stream.Duplex({
        read() {},
        write(chunk, encoding, callback) {
          this.push(chunk);
          callback();
        }
      });
      break;
    case 'transform':
      sourceStream = zlib.createTransform({
        transform(chunk, encoding, callback) {
          this.push(chunk);
          callback();
        }
      });
      break;
    default:
      throw new Error('Invalid sourceStreamType. Supported values: readable, writable, duplex, transform');
  }

  let transformStream = sourceStream;
  if (compress) {
    res.setHeader('Content-Encoding', 'gzip');
    transformStream = sourceStream.pipe(zlib.createGzip());
  }

  const writeStream = fs.createWriteStream(destinationPath);

  if (usePipeline) {
    stream.pipeline(transformStream, res, pipelineOptions, (err) => {
      if (err) {
        console.error('Pipeline failed:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  } else {
    transformStream.pipe(res);
  }

  transformStream.pipe(writeStream);
}

module.exports = streamHandler;
