class Solution1 {
  constructor(nums, val) {
    this.nums = nums
    this.val = val
  }

  removeElement() {

    let k = 0

    for (let i = 0; i < this.nums.length; ++i) {
      if (this.nums[i] !== this.val) {
        this.nums[k++] = this.nums[val]
      }
    }
  
    console.log(nums)
    console.log(k)
  
    return nums

  }
}

const s1 = new Solution1(nums = [3,2,2,3], val = 3);
console.log(s1.removeElement()) 

module.exports = {
  Solution1:Solution1
}