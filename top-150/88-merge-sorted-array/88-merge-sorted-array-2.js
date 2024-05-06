/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {

  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (j >= 0) {

    console.log(`p1 = ${i + 1}`)
    console.log(`p2 = ${j + 1}`)
    console.log(`end = ${k + 1}`)
    console.log(nums1)
    console.log(nums2)
    console.log("~ ~ ~")

    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      --k
      --i
    } else {
      nums1[k] = nums2[j]
      --k
      --j
    }

    console.log(nums1)
    console.log(nums2)
    console.log("----------")
    console.log(" ")
  }

};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
