/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = function (nums, original) {
  // includes로 배열에 존재 여부 체크
  while (nums.includes(original) == true) {
    original *= 2;
  }
  return original;
};