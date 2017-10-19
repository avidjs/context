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
    context({}, {}, {}).should.be.an('Object');
  });

  it('should return object with `request` and `response` properties', () => {
    context({}, {}, {}).should.have.all.keys('request', 'response');
  });

  it('should return object with user-defined properties', () => {
    context({
      bool: true,
      obj:  {
        nested: 'yup'
      }
    }, {}, {}).should.have.all.keys('bool', 'obj', 'request', 'response');
  });
});
