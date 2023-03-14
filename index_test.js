//const { describe } = require("mocha.js")
//const expect = chai.expect // import expect method
//this describe arguments are setting up from the group work unit tests from vedio week 6
/*
describe('MyFunctions', function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
            const x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });
        it('should throw an error if first parameter in not a string', function() {
            expect(function() {
                doSomething(5, 5);
            }).to.throw(Error);
        });
    });
});
*/

import warCardGame from "./warCardGame.js";

let assert = chai.assert;

describe('MyFunctions', function () {
    describe('#doSomething', function () {
        it('can be instantiated', function () {
            assert.isObject(new Deck());
        });
    });
});




