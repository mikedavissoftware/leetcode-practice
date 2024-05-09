class Solution {
  constructor(nums) {
    this.nums = nums
  }

  removeDuplicates() {

    let k = 0

    while (k < this.nums.length) {
      if (this.nums[k] === this.nums[k + 1]) {
        this.nums.splice(k + 1, 1)
      } else {
        k++
      }
    }

    return this.nums
  }
}

module.exports = {
  Solution:Solution
}