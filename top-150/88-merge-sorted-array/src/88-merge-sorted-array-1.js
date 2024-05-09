/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {

  let p1 = 0
  let p2 = 0

  while (p2 < n) {

    console.log(`p1 = ${p1 + 1}`)
    console.log(`p2 = ${p2 + 1}`)
    console.log(nums1)
    console.log(nums2)
    console.log("~ ~ ~")

    if (nums2[p2] > nums1[p1]) {
      if (nums1[p1 + 1]) {
        ++p1
      } else {
        if (nums1[p1] === 0) {
            nums1.splice(p1, 0, nums2[p2])
        } else {
            nums1.splice(p1 + 1, 0, nums2[p2])
        }
        nums1.pop()
        ++p1
        ++p2
      }
    } else {
        nums1.splice(p1, 0, nums2[p2])
        nums1.pop()
        ++p1
        ++p2
    }

    console.log(nums1)
    console.log(nums2)
    console.log("----------")
    console.log(" ")
  }

};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
