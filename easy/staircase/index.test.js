const staircase = require('./index');
const { TestScheduler } = require('jest');

describe(staircase, () => {
    test('test 1', () => {
        expect(staircase(6)).toEqual('
             #
            ##
           ###
          ####
         #####
        ######
        ');
    });
});