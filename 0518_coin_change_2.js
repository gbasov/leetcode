/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const row = new Array(amount + 1).fill(0);
    row[0] = 1;
    
    for (let coin of coins) {
        for (let j = 1; j < row.length; j++) {
            if (coin <= j) {
                row[j] += row[j - coin];
            }
        }
    }
    
    return row[amount];
};
