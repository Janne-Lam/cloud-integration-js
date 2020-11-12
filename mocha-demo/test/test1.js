var assert = require('assert').strict;
const expect = require('chai').expect;
const stringOps = require('../stringOperations');

describe('String operation', function () {
  describe('String length', function () {
    it('should return lenght of string when given input "hello world"', function () {
        //mocha
        //assert.strictEqual(stringOps.length('Hello world'), 11);
        //chai
        expect(stringOps.length('Hello world')).to.equal(11);
    });

    it('should return -1 if string parameter is not a string', function () {
        //mocha
        /*
        assert.strictEqual(stringOps.length({}), -1);
        assert.strictEqual(stringOps.length(3453), -1);
        assert.strictEqual(stringOps.length(true), -1);
        assert.strictEqual(stringOps.length(null), -1);
        */
        //chai
        expect(stringOps.length({})).to.equal(-1);
        expect(stringOps.length(3453)).to.equal(-1);
        expect(stringOps.length(true)).to.equal(-1);
        expect(stringOps.length(null)).to.equal(-1);
    });

    it('should return -1 if no parameter was given', function () {
        //mocha
        //assert.strictEqual(stringOps.length(), -1);
        //chai
        expect(stringOps.length()).to.equal(-1);
    });
  });

  describe('Character count', function () {
    it('Correct character occurance for a test string', function () {
        expect(stringOps.charCount("Hello world hhh", "o")).to.equal(2);
        expect(stringOps.charCount("Hello world hhh", "h")).to.equal(3);
        expect(stringOps.charCount("Hello world hhh", " ")).to.equal(2);
    });

    it('Not correct character occurance for a test string', function () {
        expect(stringOps.charCount("Hello world hhh", "o")).to.not.equal(!2);
    });

    it('Correct character occurance for uppercase H', function () {
        expect(stringOps.charCount("Hello world hhh", "H")).to.equal(1);
    });

    it('should return false if second parameter is a multi character string', function () {
        expect(stringOps.charCount("Hello world hhh", "haha")).to.be.false;
    });

    it('Should return false if parameters are not string', function() {
        expect(stringOps.charCount(32131, {})).to.be.false;
    })

    it('Should return false if second parameter is empty string', function() {
        expect(stringOps.charCount("Hello world hhh", "")).to.be.false;
    })
  });
});