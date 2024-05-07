/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
  let k = 0

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== val) {
      nums[k++] = nums[val]
    }
  }

  console.log(nums)
  console.log(k)

  return k

};

removeElement([2,3,3,2], 3)