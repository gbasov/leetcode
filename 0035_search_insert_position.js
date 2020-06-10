/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);

        if (target === nums[middle]) {
            return middle;
        }
        
        if (target > nums[middle]) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }

    return start;
};
