/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => {
        return (b[0] - b[1]) - (a[0] - a[1]);
    });
    
    let i, sum = 0, N = costs.length/2;
    
    for (i in costs) {
        sum += i < N ? costs[i][1] : costs[i][0];
    }
    
    return sum;
};
