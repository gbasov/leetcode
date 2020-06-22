/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    let singles = 0;
    let doubles = 0;

    for (num of nums) {
        // if a new bit was in singles, then remove it from singles
        // if a new bit was not in singles and not in doubles, then add it to singles
        singles = (~doubles) & (singles ^ num);

        // add to doubles if it's not in singles and in doubles
        // remove from doubles if it's in singles or in doubles
        doubles = (~singles) & (doubles ^ num);

        console.log(num, 'singles:', singles.toString(2), 'doubles:', doubles.toString(2));
    }

    return singles;
};

console.log(singleNumber([2,2,3,2]));
// console.log(singleNumber([0,1,0,1,0,1,99]));
