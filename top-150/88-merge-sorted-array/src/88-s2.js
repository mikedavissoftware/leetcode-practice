class Solution {
  constructor() {
    this.nums1 = nums1
    this.m = m
    this.nums2 = nums2
    this.n = n
  }

  merge() {

    let i = this.m - 1
    let j = this.n - 1
    let k = this.m + this.n - 1

    while (j >= 0) {

      if (i >= 0 && this.nums1[i] > this.nums2[j]) {
        this.nums1[k] = this.nums1[i]
        --k
        --i
      } else {
        this.nums1[k] = this.nums2[j]
        --k
        --j
      }

    }

    return this.nums1
  }
}

module.exports = {
  Solution:Solution
}
