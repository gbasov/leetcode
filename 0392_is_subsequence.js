/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s.length) {
        return true;
    }
    
    let j = 0;
    for (let c of t) {
        if (c === s[j]) {
            j++;
            if (j === s.length) {
                return true;
            }
        }
    }
    
    return false;
};
