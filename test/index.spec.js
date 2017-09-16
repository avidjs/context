/**
 * @file Tests for lib/index.js
 */


const chai = require('chai');


const should = chai.should();


const context = require('../lib/index.js');


describe('context', () => {
  it('should export a function', () => {
    context.should.be.a('Function');
  });

  it('should return an object', () => {
    context(() => {}, {}, {}).should.be.an('Object');
  });
});
