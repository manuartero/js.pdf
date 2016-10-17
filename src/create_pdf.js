'use strict';

const _ = require('lodash');
const PDFDocument = require('pdfkit');
const defaultCss = require('./default_css');
const Wrapper = require('./wrapper');
const utils = require('./utils');


/**
 * @type {PDFKit.PDFDocument}
 */
let doc;

/**
 *
 */
let CSS;

let debug = true;


module.exports = createPdf;

/**
 * @param {Object} obj
 * @param {Object=} opt
 */
function createPdf(obj, opt) {
  if (!obj) {
    return undefined;
  }
  CSS = _.merge({}, defaultCss, opt);
  if (debug) { console.dir(CSS); }
  doc = new PDFDocument();
  writeInPdf(obj);
  doc.end();
  return new Wrapper(doc);
}


function writeInPdf(item, depth = 1) {
  if (_isBaseCase(item)) {
    return baseCase(item);
  }
  Object.keys(item).forEach((key) => {
    printTitle(key, depth);
    writeInPdf(item[key], depth + 1);
  });
  return undefined;
}


function _isBaseCase(v) {
  return utils.isString(v) || utils.isArray(v) || utils.isNumber(v);
}


/**
 * @param {Array<string>} v
 */
function baseCase(v) {
  if (debug) { console.log('p'); }
  doc.fontSize(CSS.p.fontSize);
  doc.fillColor(CSS.p.color);
  if (utils.isString(v) || utils.isNumber(v)) {
    doc.text(v);
  }
  if (utils.isArray(v)) {
    for (let item of v) {
      doc.text(item);
    }
  }
}


/**
 * @param {string} title
 * @param {number} depth
 */
function printTitle(title, depth) {
  // FIXME magic number
  let heading = depth > 3 ? 'h3' : `h${depth}`;
  if (debug) { console.log(heading); }
  doc.fillColor(CSS[heading].color);
  doc.fontSize(CSS[heading].fontSize);
  doc.text(utils.humanize(title));
}
