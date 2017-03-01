'use strict';

module.exports = {

  /**
   * @param {string} str
   */
  humanize(str) {
    let response = [];
    let word = '';
    let readingLowerCases = false;
    for (let char of str) {
      if (readingLowerCases && isUpperCase(char)) {
        response.push(capitalizeFirstLetter(word));
        word = char;
      } else {
        word += char;
      }
      readingLowerCases = isLowerCase(char);
    }
    return response.join(' ');
  },


  isString(v) {
    return Object.prototype.toString.call(v) === '[object String]';
  },


  isArray(v) {
    return Object.prototype.toString.call(v) === '[object Array]';
  },


  isNumber(v) {
    return Object.prototype.toString.call(v) === '[object Number]';
  }

};


/**
 * @param {string} str
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


/**
 * @param {string} str
 */
function isUpperCase(char) {
  return char === char.toUpperCase();
}


/**
 * @param {string} str
 */
function isLowerCase(char) {
  return char === char.toLowerCase();
}
