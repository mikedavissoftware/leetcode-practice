/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  let p1 = 0
  let p2 = 0

  // for (let i = n; i < n; ++i) {
  //     for (let j = 0; j < nums1.length(); ++j) {
  //         if (nums2[i] >= nums1[j]) {

  //         }
  //     }
  // }

  // let nums1Length = m

  // nums2.forEach((num2) => {
  //     for (let i = 0; i < nums1Length; ++i) {
  //         if (nums1[i] >= num2) {
  //             nums1.splice(p1 - 1, 0, num2)
  //             nums1.pop()
  //             break
  //         }
  //     }
  // })

  // while (p2 < n) {
  //     if (nums1[p1] < nums2[p2]) {
  //         ++p1
  //     } else if (nums1[p1] >= nums2[p2]) {
  //         if (p1 > 0) {
  //             nums1.splice(p1 - 1, 0, nums2[p2])
  //         } else {
  //             nums1.unshift(nums2[p2])
  //         }
  //         nums1.pop()
  //         ++p1
  //         ++p2
  //     }
  // }

  // while (p2 < n) {
  //     if (nums1[p1] < nums2[p2]) {
  //         if (nums1[p1 + 1] !== 0) {
  //             ++p1
  //         } else {
  //             nums1.splice(p1, 0, nums2[p2])
  //             nums1.pop()
  //             ++p2
  //         }
  //     } else if (nums1[p1] = nums2[p2]) {
  //         nums1.splice(p1, 0, nums2[p2])
  //         nums1.pop()
  //         ++p2
  //     } else {
  //         if (p1 > 0) {
  //             nums1.splice(p1, 0, nums2[p2])
  //         } else {
  //             nums1.unshift(nums2[p2])
  //         }
  //         nums1.pop()
  //         ++p2
  //     } 
  // }

  // while (p2 < n) {
  //     if (nums1[p1] < nums2[p2]) {
  //         if (nums1[p1 + 1] !== 0 && nums1[p1 + 1] <= nums2[p2]) {
  //             ++p1
  //         } else {
  //             nums1.splice(p1, 0, nums2[p2])
  //             nums1.pop()
  //             ++p2
  //         }
  //     } else {
  //         nums1.splice(p1, 0, nums2[p2])
  //         nums1.pop() 
  //         ++p1
  //         ++p2
  //     }
  // }



};