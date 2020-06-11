/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
    const RED = 0, BLUE = 2;
    let i = 0, j = 0, k = nums.length;
    
    while (j < k) {
        if (nums[j] === RED) {
            swap(nums, i, j);
            i++;
            j++;
        } else if (nums[j] === BLUE) {
            k--;
            swap(nums, j, k);
        } else {
            j++;
        }
    }
};

const swap = (nums, i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};
