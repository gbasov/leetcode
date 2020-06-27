const dp = [0];

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n) {
    if (n < dp.length) {
        return dp[n];
    }

    const squares = findSquares(n);

    for (let i = dp.length; i <= n; i++) {
        const options = [];
        for (let square of squares) {
            if (square > i) break;
            options.push(dp[i - square] + 1);
        }

        dp[i] = Math.min(...options);
    }

    return dp[n];
};

const findSquares = function(n) {
    const squares = [];
    let i = 1;
    let nextSquare = 1;
    while (nextSquare <= n) {
        squares.push(nextSquare);
        nextSquare = Math.pow(++i, 2);
    }

    return squares;
}


console.log(
    numSquares(13),
    numSquares(14),
    numSquares(15),
    numSquares(9),
);
