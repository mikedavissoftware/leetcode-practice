const Solution = require('../src/27-s1').Solution

test('27-s1 Test Case 1', () => {
  const s = new Solution(nums = [3,2,2,3], val = 3)
  expect(s.removeElement().slice(0,2)).toStrictEqual([2,2])
});

test('27-s1 Test Case 2', () => {
  const s = new Solution(nums = [0,1,2,2,3,0,4,2], val = 2)
  expect(s.removeElement().slice(0,5)).toStrictEqual([0,1,4,0,3])
});

// 0.157s on desktop
// 0.000s on laptop