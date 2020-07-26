const aVeryBigSum = require('./index');

describe(aVeryBigSum, () => {
    it('should return an integer', () => {
        expect(typeof aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toBe('number');
    });
    it('should return the sum of the numbers in the array', () => {
        expect(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toEqual(5000000015);
    });
});