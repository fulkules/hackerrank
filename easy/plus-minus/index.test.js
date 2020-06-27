const plusMinus = require('./index');

describe(plusMinus, () => {
    test('test 1', () => {
        expect(plusMinus([-4, 3, -9, 0, 4, 1 ])).toEqual([0.500000, 0.333333, 0.166667]);
    });
});