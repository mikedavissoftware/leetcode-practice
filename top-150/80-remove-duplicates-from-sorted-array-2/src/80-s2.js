class Solution {
  constructor(nums) {
    this.nums = nums
  }

  removeDuplicates() {

    let k = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
        continue
      }
      nums[k++] = nums[i]
    }

    console.log(nums)
    // console.log(k)

    return nums
    // return k
  }
}

module.exports = {
  Solution:Solution
}