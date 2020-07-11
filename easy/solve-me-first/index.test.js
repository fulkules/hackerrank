const solveMeFirst = require('./index');

describe(solveMeFirst, () => {
    it('should return the sum of the two digit args', () => {
        expect(solveMeFirst(2,3)).toEqual(5);
        expect(solveMeFirst(7, 3)).toEqual(10);
    });
});