const Solution = require('../src/26-s1').Solution

test("26-s1 Test Case 1", () => {
  const s = new Solution([1,1,2])
  expect(s.removeDuplicates()).toStrictEqual([1,2])
})

test("26-s1 Test Case 1", () => {
  const s = new Solution([0,0,1,1,1,2,2,3,3,4])
  expect(s.removeDuplicates()).toStrictEqual([0,1,2,3,4])
})

// 0.000s on desktop
// 0.000s on laptop