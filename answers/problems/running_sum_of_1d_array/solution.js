/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let curr = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        result.push(curr)
    }

    return result;
};