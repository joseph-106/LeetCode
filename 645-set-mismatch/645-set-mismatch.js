/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    const resultArr = [];
    const existArr = [];
    let tmp;
    for(let i = 1; i <= nums.length; i++){
        if (existArr.includes(nums[i-1])){
            resultArr.push(nums[i-1]);
        } else {
            existArr.push(nums[i-1]);
        }
        if(!nums.includes(i)) tmp = i;
    }
    resultArr.push(tmp);
    return resultArr;
};