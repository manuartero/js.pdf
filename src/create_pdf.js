const PDFDocument = require('pdfkit');


const CSS = {
  body: {
    font: 'Helvetica'
  },
  h1: {
    fontSize: 20,
    margin: {
      top: 2,
      bottom: 0.5
    }
  },
  h2: {
    fontSize: 18,
    margin: {
      top: 2,
      bottom: 0.5
    }
  },
  p: {
    fontSize: 12
  }
};

module.exports = createPdf;

/**
 * @return {}
 */
function createPdf(obj) {
  let doc = new PDFDocument();
  writeInPdf(doc, obj);
  doc.end();
  return doc;
}


function writeInPdf(doc, item) {
  if (isBaseCase(item)) {
    return baseCase(doc, item);
  }
  Object.keys(item).forEach((key) => {
    printTitle(doc, key);
    writeInPdf(doc, item[key]);
  });
  return undefined;
}

function isBaseCase(v) {
  return isString(v) || isArray(v);
}

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
 * @param {string} title
 * @return {void}
 */
function printTitle(doc, title) {
  doc.fontSize(CSS.h1.fontSize);
  doc.text(title);
}

/**
 * @return {boolean}
 */
function isString(v) {
  return Object.prototype.toString.call(v) === '[object String]';
}

/**
 * @return {boolean}
 */
function isArray(v) {
  return Object.prototype.toString.call(v) === '[object Array]';
}
