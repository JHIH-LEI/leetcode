/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// time complexity (n)
var addTwoNumbers = function (l1, l2) {
  const l1InArray = turnToArray(l1, []);
  const l2InArray = turnToArray(l2, []);

  const result = sum(l1InArray, l2InArray);

  return linking(result.length, 0, result);
};

const turnToArray = function (remainNode, result) {
  if (remainNode.next === null) {
    result.push(remainNode.val);
    return result;
  }
  result.push(remainNode.val);
  turnToArray(remainNode.next, result);
  return result;
};

const linking = function (remainNodeNum, currentNodeIndex, result) {
  if (remainNodeNum === 0) {
    return;
  }
  return new ListNode(
    result[currentNodeIndex],
    linking(remainNodeNum - 1, currentNodeIndex + 1, result)
  );
};

const sum = function (l1InArray, l2InArray) {
  const longestArrayLength =
    l1InArray.length > l2InArray.length ? l1InArray.length : l2InArray.length;

  const result = [];
  let pendingNum = 0;
  for (let i = 0; i < longestArrayLength; i++) {
    const num1 = l1InArray[i] || 0;
    const num2 = l2InArray[i] || 0;

    let num = num1 + num2 + pendingNum;
    pendingNum = 0;

    if (num > 9) {
      pendingNum += 1;
      num = num - 10;
    }
    result.push(num);
  }
  if (pendingNum !== 0) result.push(pendingNum);
  return result;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Runtime: 174 ms, faster than 57.12% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.6 MB, less than 40.41% of JavaScript online submissions for Add Two Numbers.
 */

// 重構前：
/**
 * Runtime太久..
 * Runtime: 203 ms, faster than 18.83% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.1 MB, less than 71.58% of JavaScript online submissions for Add Two Numbers.
 */

// var addTwoNumbers = function (l1, l2) {
//   const recordFroml1 = [];
//   const recordFroml2 = [];

//   iterate(l1, recordFroml1, 0);
//   iterate(l2, recordFroml2, 0);

//   const totalIterate =
//     recordFroml1.length > recordFroml2.length
//       ? recordFroml1.length
//       : recordFroml2.length;

//   const result = [];
//   let pendingNum = 0;

//   for (let i = 0; i < totalIterate; i++) {
//     const num1 = recordFroml1[i] || 0;
//     const num2 = recordFroml2[i] || 0;

//     let num = num1 + num2 + pendingNum;
//     pendingNum = 0;

//     if (num > 9) {
//       pendingNum += 1;
//       num = num - 10;
//     }
//     result.push(num);
//   }

//   if (pendingNum !== 0) result.push(pendingNum);

//   // 變成ListNode
//   return linking(result.length, 0, result);
// };

// const iterate = function (remainNode, record) {
//   if (remainNode.next === null) {
//     record.push(remainNode.val);
//     return;
//   }
//   record.push(remainNode.val);
//   iterate(remainNode.next, record);
//   return;
// };

// const linking = function (reaminNodeNum, currentNodeIndex, result) {
//   if (reaminNodeNum === 0) {
//     return;
//   }
//   return new ListNode(
//     result[currentNodeIndex],
//     linking(reaminNodeNum - 1, currentNodeIndex + 1, result)
//   );
// };
