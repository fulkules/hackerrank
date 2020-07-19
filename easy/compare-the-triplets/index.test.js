const compareTriplets = require('./index');

describe(compareTriplets, () => {
    it('should return an array', () => {
        expect(compareTriplets([5,6,7],[3,6,10])).toBeInstanceOf(Array);
    });
    it('should return the total points scored by comparing index of each array', () => {
        expect(compareTriplets([5,6,7],[3,6,10])).toEqual([1,1]);
        expect(compareTriplets([17,28,30],[99,16,8])).toEqual([2,1]);
    });
});