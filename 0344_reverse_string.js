/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const half = Math.floor(s.length / 2);
    for (let i = 0; i < half; i++) {        
        const opposite = s.length - 1 - i;
        const tmp = s[i];
        s[i] = s[opposite];
        s[opposite] = tmp;
    }
};
