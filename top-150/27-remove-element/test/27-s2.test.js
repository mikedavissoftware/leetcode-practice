const Solution1 = require('../src/solution-1').Solution1
const Solution2 = require('../src/solution-2').Solution2

// about 13ms on desktop
test('Testing Leetcode #27 Solution 1', () => {
  const s1 = new Solution1(nums = [3,2,2,3], val = 3);
  console.log(s1.removeElement())
  expect(s1.removeElement().slice(0,2)).toStrictEqual([2,2]);
});

// about 13ms on desktop
test('Testing Leetcode #27 Solution 2', () => {
  const s2 = new Solution2(nums = [3,2,2,3], val = 3);
  console.log(s2.removeElement())
  expect(s2.removeElement().slice(0,2)).toStrictEqual([2,2]);
});