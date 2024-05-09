class Solution {
  constructor(nums, val) {
    this.nums = nums
    this.val = val
  }

  // this solution removes the matching values and retains order, depositing all matching values at the end
  // Line 17 array.push isn't necessary, especially if we want to remove the matching values completely from the array

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