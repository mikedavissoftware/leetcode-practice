const Solution = require('../src/88-s2').Solution

test("88-s2 Test Case 1", () => {
  const s = new Solution(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3)
  expect(s.merge()).toStrictEqual([1,2,2,3,5,6])
})

test("88-s2 Test Case 2", () => {
  const s = new Solution(nums1 = [1], m = 1, nums2 = [], n = 0)
  expect(s.merge()).toStrictEqual([1])
})

test("88-s2 Test Case 3", () => {
  const s = new Solution(nums1 = [0], m = 0, nums2 = [1], n = 1)
  expect(s.merge()).toStrictEqual([1])
})

// 0.152s on desktop
// 0.000s on laptop