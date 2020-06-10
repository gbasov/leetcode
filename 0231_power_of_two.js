/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // return Math.log2(n) % 1 === 0;
    
    return n > 0 && !(n & (n - 1));
};
