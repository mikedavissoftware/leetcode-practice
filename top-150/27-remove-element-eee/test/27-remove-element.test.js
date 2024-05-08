const Solution1 = require('../src/solution-1').Solution1
const Solution2 = require('../src/solution-2').Solution2

// describe('Testing Leetcode #27', function() {
//   it('1. Solution 1 Test', function() {
//     const s1 = new Solution1(nums = [3,2,2,3], val = 3);
//     expect(s1.removeElement()).to.equal([2,2,2,3])
//     done()
//   })
// })

// test('Testing Leetcode #27', () => {
//   const s1 = new Solution1(nums = [3,2,2,3], val = 3);
//   expect(s1.removeElement()).toStrictEqual([2,2,3,3]);
// });

test('Testing Leetcode #27', () => {
  const s2 = new Solution2(nums = [3,2,2,3], val = 3);
  expect(s2.removeElement()).toStrictEqual([2,2,3,3]);
});