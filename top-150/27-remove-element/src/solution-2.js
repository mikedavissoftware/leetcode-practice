class Solution2 {
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

    console.log(nums)
    console.log(k)

    return this.nums

  }
}

const s2 = new Solution2(nums = [3,2,2,3], val = 3);
console.log(s2.removeElement()) 

module.exports = {
  Solution2:Solution2
}