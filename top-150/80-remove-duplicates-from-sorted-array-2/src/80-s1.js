class Solution {
  constructor(nums) {
    this.nums = nums
  }

  removeDuplicates() {

    let k = nums.length
    let i = 0
    let j = 1

    if (j === k) {
      return k
    }

    while (j < k) {
      if (nums[j] === nums[i]) {
        if (j === k - 1 && j - i >= 2) {
          nums.pop()
          j--
          k--
        } else {
          j++
        }
      } else {
        if (j - i >= 2) {
          k -= (j - i - 2)
          let y = j
          let x = 2
          while (y < nums.length) {
            nums[i + x++] = nums[y++]
          }
          i += 2
          j = i + 1 // ANALYZE THIS FINAL CHANGE to satisfy final edge case of test case 2
        } else {
          i = j
        }
      }
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