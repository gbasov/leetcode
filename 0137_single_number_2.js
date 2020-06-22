/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    let singles = 0;
    let doubles = 0;

    for (num of nums) {
        singles = (~doubles) & (singles ^ num);
        doubles = (~singles) & (doubles ^ num);
    }

    return singles;
};
