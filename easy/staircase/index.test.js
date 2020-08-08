const staircase = require('./index');
const { TestScheduler } = require('jest');

describe(staircase, () => {
    test('returns a string', () => {
        expect(typeof staircase(6)).toEqual('string');
    });
    // test('returns a string drawing that looks like a staircase', () => {
    //     expect(staircase(6)).toEqual('     #\n    ##\n   ###\n  ####\n #####\n######');
    // });
});