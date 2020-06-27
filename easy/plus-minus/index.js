// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
// though answers with absolute error of up to 10^-4 are acceptable.

// For example, given the array [1,1,0,-1,-1] there are 5 elements, two positive, two negative and one zero. Their ratios would be
//  2/5 = .400000, 2/5 = .400000 and 1/5 = 0.200000. It should be printed as

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, 
// each on a separate line rounded to six decimals.

// plusMinus has the following parameter(s):

// arr: an array of integers
// Input Format

// The first line contains an integer, n, denoting the size of the array.
// The second line contains 'n' space-separated integers describing an array of numbers arr(arr[0], arr[1], arr[2]..., arr[n-1]).

// Constraints
// 0 < n < 100
// -100 <= arr[i] <= 100


// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667

// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333  and zeros: 1/6 = 0.166667.

function plusMinus(arr){
    let count = arr.length;
    let neg = 0, pos = 0, zero = 0;
    for (let i = 0; i <= count; i++){
        if(arr[i] < 0){
            neg++;
        } else if(arr[i] > 0){
            pos++;
        } else if(arr[i] === 0) {
            zero++;
        }
    }
    // console.log((pos/count).toFixed(6));
    // console.log((neg/count).toFixed(6));
    // console.log((zero/count).toFixed(6));
    return [+(pos/count).toFixed(6), +(neg/count).toFixed(6), +(zero/count).toFixed(6)];
}

module.exports = plusMinus;