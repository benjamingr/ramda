var assert = require('assert');

var R = require('..');


describe('has', function() {
    var fred = {name: 'Fred', age: 23};
    var anon = {age: 99};

    it('returns a function that checks the appropriate property', function() {
        var nm = R.has('name');
        assert.strictEqual(typeof nm, 'function');
        assert.strictEqual(nm(fred), true);
        assert.strictEqual(nm(anon), false);
    });

    it('does not check properties from the prototype chain', function() {
        var Person = function() {};
        Person.prototype.age = function() {};

        var bob = new Person();
        assert.strictEqual(R.has('age', bob), false);
    });

    it('works properly when called with two arguments', function() {
        assert.strictEqual(R.has('name', fred), true);
        assert.strictEqual(R.has('name', anon), false);
    });

    it('throws if given no arguments', function() {
        assert.throws(R.has, TypeError);
    });
});
