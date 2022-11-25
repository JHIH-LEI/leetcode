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

/**
 * Runtime: 99 ms, faster than 97.30% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.1 MB, less than 71.43% of JavaScript online submissions for Add Two Numbers.
 */

const addTwoNumbers = function (l1, l2) {
  // 不知道總長多少=>用Recursion。 並把值存在陣列，之後就能迭代它做相加
  const l1InArray = turnToArray(l1, []);
  const l2InArray = turnToArray(l2, []);

  // 迭代兩兩相加後，加入linking list
  return sumAndTurnToLinkingList(l1InArray, l2InArray);
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

const sumAndTurnToLinkingList = function (l1InArray, l2InArray) {
  // 處理特殊情況：
  // (1)長度不對等，如果用短的那條會造成有數字沒被加到，所以要找出最長的那條長度是多少，才知道必須迭代（相加）幾次
  // (2)進位問題，兩兩相加完後可能會有pending的進位未處理，此時直接往右進位。
  const longestArrayLength =
    l1InArray.length > l2InArray.length ? l1InArray.length : l2InArray.length;

  const dummyNode = new ListNode(0, undefined);
  let currentNode = dummyNode;
  let pendingNum = 0;

  // 兩兩相加
  // 處理進位，進位是往右進位，也就是說list的第一位反而是低位（個位），最後一位反而是高位，這次相加的結果把進位存起來，放在下次相加時拿來疊加上去
  // 將結果加入linking list,更新node指針
  for (let i = 0; i < longestArrayLength; i++) {
    const num1 = l1InArray[i] || 0;
    const num2 = l2InArray[i] || 0;

    let num = num1 + num2 + pendingNum;
    pendingNum = 0;

    if (num > 9) {
      pendingNum += Math.floor(num / 10);
      num = num % 10;
    }
    currentNode.next = new ListNode(num, undefined);
    currentNode = currentNode.next;
  }

  if (pendingNum !== 0) currentNode.next = new ListNode(pendingNum, undefined);
  return dummyNode.next;
};

/**
 * 解法2:
 * 不把linking node變成陣列，而是直接迭代，但這樣要處理很多例外(if l1 === null)
 * Runtime: 180 ms, faster than 47.22% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.4 MB, less than 48.14% of JavaScript online submissions for Add Two Numbers.
 */

// const addTwoNumbers = function (l1, l2) {
//   return sumAndReturnLinkingList(l1, l2);
// };

// const sumAndReturnLinkingList = function (l1, l2) {
//   const dummyNode = new ListNode(0, undefined);
//   let currentNode = dummyNode;
//   let pendingNum = 0;
//   while (l1 !== null || l2 !== null) {
//     const num1 = l1 === null ? 0 : l1.val;
//     const num2 = l2 === null ? 0 : l2.val;
//     let num = num1 + num2 + pendingNum;
//     pendingNum = 0;
//     if (num > 9) {
//       pendingNum = Math.floor(num / 10);
//       num = num % 10;
//     }
//     currentNode.next = new ListNode(num, undefined);
//     currentNode = currentNode.next;
//     if (l1 !== null) {
//       l1 = l1.next;
//     }
//     if (l2 !== null) {
//       l2 = l2.next;
//     }
//   }
//   if (pendingNum !== 0) currentNode.next = new ListNode(pendingNum, undefined);
//   return dummyNode.next;
// };

/**
 * 解法3:
 * Runtime: 174 ms, faster than 57.12% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.6 MB, less than 40.41% of JavaScript online submissions for Add Two Numbers.
 */
// var addTwoNumbers = function (l1, l2) {
//   const l1InArray = turnToArray(l1, []);
//   const l2InArray = turnToArray(l2, []);

//   const result = sum(l1InArray, l2InArray);

//   return linking(result.length, 0, result);
// };

// const turnToArray = function (remainNode, result) {
//   if (remainNode.next === null) {
//     result.push(remainNode.val);
//     return result;
//   }
//   result.push(remainNode.val);
//   turnToArray(remainNode.next, result);
//   return result;
// };

// const linking = function (remainNodeNum, currentNodeIndex, result) {
//   if (remainNodeNum === 0) {
//     return;
//   }
//   return new ListNode(
//     result[currentNodeIndex],
//     linking(remainNodeNum - 1, currentNodeIndex + 1, result)
//   );
// };

// const sum = function (l1InArray, l2InArray) {
//   const longestArrayLength =
//     l1InArray.length > l2InArray.length ? l1InArray.length : l2InArray.length;

//   const result = [];
//   let pendingNum = 0;
//   for (let i = 0; i < longestArrayLength; i++) {
//     const num1 = l1InArray[i] || 0;
//     const num2 = l2InArray[i] || 0;

//     let num = num1 + num2 + pendingNum;
//     pendingNum = 0;

//     if (num > 9) {
//       pendingNum += 1;
//       num = num - 10;
//     }
//     result.push(num);
//   }
//   if (pendingNum !== 0) result.push(pendingNum);
//   return result;
// };

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

/**
 * 最初暴力解法：
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

// const linking = function (remainNodeNum, currentNodeIndex, result) {
//   if (remainNodeNum === 0) {
//     return;
//   }
//   return new ListNode(
//     result[currentNodeIndex],
//     linking(remainNodeNum - 1, currentNodeIndex + 1, result)
//   );
// };
