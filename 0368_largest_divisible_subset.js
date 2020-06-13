/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function (nums) {
    const cnt = new Array(nums.length).fill(1);
    const prev = new Array(nums.length).fill(-1);
    let maxCnt = 0;
    let maxIdx = -1;

    nums.sort((a, b) => a - b);

    for (let i in nums) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] === 0 && cnt[j] + 1 > cnt[i]) {
                cnt[i] = cnt[j] + 1;
                prev[i] = j;
            }
        }
        if (cnt[i] > maxCnt) {
            maxCnt = cnt[i];
            maxIdx = i;
        }
    }

    const set = [];
    while (maxIdx != -1) {
        set.push(nums[maxIdx]);
        maxIdx = prev[maxIdx];
    }

    return set;
};
