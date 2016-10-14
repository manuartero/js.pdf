'use strict';

const fs = require('fs');


/**
 * @param {NodeJS.ReadableStream} readableStream
 */
function Wrapper(readableStream) {
  this._readableStream = readableStream;
}

/**
 * @param {string} path
 */
Wrapper.prototype.toFile = function toFile(path) {
  let writeStream = fs.createWriteStream(path);
  this._readableStream.pipe(writeStream);
};

module.exports = Wrapper;
