'use strict';

const PDFDocument = require('pdfkit');
const CSS = require('./default_css');
const Wrapper = require('./wrapper');


module.exports = createPdf;

/**
 * @param {Object} obj
 */
function createPdf(obj) {
  // TODO null input
  let doc = new PDFDocument();
  writeInPdf(doc, obj);
  doc.end();
  return new Wrapper(doc);
}


/**
 * @param {PDFKit.PDFDocument} doc
 * @param {Object} item
 * @param {number=} depth
 */
function writeInPdf(doc, item, depth = 1) {
  if (isBaseCase(item)) {
    return baseCase(doc, item);
  }
  Object.keys(item).forEach((key) => {
    printTitle(doc, key, depth);
    writeInPdf(doc, item[key], depth + 1);
  });
  return undefined;
}


function isBaseCase(v) {
  return isString(v) || isArray(v);
}


/**
 * @param {PDFKit.PDFDocument} doc
 * @param {Array<string>} v
 */
function baseCase(doc, v) {
  doc.fontSize(CSS.p.fontSize);
  if (isString(v)) {
    doc.text(v);
  }
  if (isArray(v)) {
    for (let item of v) {
      doc.text(item);
    }
  }
}


/**
 * @param {PDFKit.PDFDocument} doc
 * @param {string} title
 * @param {number} depth
 */
function printTitle(doc, title, depth) {
  // FIXME magic number
  let heading = depth > 3 ? 'h3' : `h${depth}`;
  doc.fontSize(CSS[heading].fontSize);
  doc.text(title);
}


function isString(v) {
  return Object.prototype.toString.call(v) === '[object String]';
}

function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]';
}
