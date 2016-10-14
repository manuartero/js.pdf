/* global describe it */
const expect = require('chai').expect;
const main = require('./main');

describe('main.js', () => {
  describe('foo()', () => {
    it('returns 42', () => {
      expect(main()).to.be.equal(42);
    });
  });
});
