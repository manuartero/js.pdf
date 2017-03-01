'use strict';

/* global describe it */
const expect = require('chai').expect;
const createPdf = require('./index');


describe('createPdf()', () => {
  it('is a function', () => {
    expect(createPdf()).to.be.a('function');
  });
});
