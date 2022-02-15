/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  // 배열 내에 존재하는 경우
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  }
  // 배열 내에 존재하지 않는 경우
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] < target) & (target < nums[i + 1])) {
      return i + 1;
    }
  }
  // 처음이나 끝에 위치하는 경우
  return target < nums[0] ? 0 : nums.length;
};