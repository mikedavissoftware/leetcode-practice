class Solution {
  constructor() {
    this.nums1 = nums1
    this.m = m
    this.nums2 = nums2
    this.n = n
  }

  merge() {

    let p1 = 0
    let p2 = 0
  
    while (p2 < this.n) {
  
      if (this.nums2[p2] > this.nums1[p1]) {
        if (this.nums1[p1 + 1]) {
          ++p1
        } else {
          if (this.nums1[p1] === 0) {
              this.nums1.splice(p1, 0, this.nums2[p2])
          } else {
              this.nums1.splice(p1 + 1, 0, this.nums2[p2])
          }
          this.nums1.pop()
          ++p1
          ++p2
        }
      } else {
          this.nums1.splice(p1, 0, this.nums2[p2])
          this.nums1.pop()
          ++p1
          ++p2
      }

    }

    return this.nums1
  }
}

module.exports = {
  Solution:Solution
}