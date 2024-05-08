class Solution1 {
  constructor(nums, val) {
    this.nums = nums
    this.val = val
  }

  removeElement() {

    let k = this.nums.length - 1
    let i = 0

    while (k > i) {
      if (nums[i] !== this.val) {
        i++
      } else {
        if (nums[k] !== this.val) {
          nums[i++] = nums[k--]
        } else {
          k--
        }
      }
    }
  
    return this.nums

  }
}

module.exports = {
  Solution1:Solution1
}