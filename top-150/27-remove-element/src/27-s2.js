class Solution {
  constructor(nums, val) {
    this.nums = nums
    this.val = val
  }

  removeElement() {

    let k = this.nums.length
    let i = 0

    while (i < k) {
      if (this.nums[i] === this.val) {
        this.nums.push(this.nums[i])
        this.nums.splice(i, 1)
        k--
      } else {
        i++
      }
    }

    return this.nums
  }
}

module.exports = {
  Solution:Solution
}