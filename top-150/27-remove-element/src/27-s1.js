class Solution {
  constructor(nums, val) {
    this.nums = nums
    this.val = val
  }

  removeElement() {

    let k = this.nums.length - 1
    let i = 0

    while (k > i) {
      if (this.nums[i] !== this.val) {
        i++
      } else {
        if (this.nums[k] !== this.val) {
          this.nums[i++] = this.nums[k--]
        } else {
          k--
        }
      }
    }
  
    return this.nums

  }
}

module.exports = {
  Solution:Solution
}