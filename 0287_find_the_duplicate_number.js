/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
    let tortoise = nums[0];
    let hare = nums[nums[0]];

    while (hare !== tortoise) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    }

    tortoise = nums[0];
    hare = nums[hare];

    while (hare !== tortoise) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return tortoise;
};
