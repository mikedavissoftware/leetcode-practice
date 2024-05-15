const Solution = require('../src/80-s2').Solution

test("80-s2 Test Case 1", () => {
  const s = new Solution()
  expect(s.removeDuplicates(nums = [0,0,1,1,1,1,2,3,3])).toStrictEqual([0,0,1,1,2,3,3,3,3])
})

test("80-s2 Test Case 2", () => {
  const s = new Solution()
  expect(s.removeDuplicates(nums = [0,1,2,2,2,2,2,3,4,4,4]).slice(0,7)).toStrictEqual([0,1,2,2,3,4,4])
})

// 0.000s on desktop
// 0.000s on laptop