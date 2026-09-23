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
var addTwoNumbers = function (l1, l2) {
  let currentNode1 = l1;
  let currentNode2 = l2;
  let head = new ListNode();
  let currentNode3 = head;
  let carry = 0;

  while (currentNode1 || currentNode2 || carry !== 0) {
    let value1 = currentNode1 ? currentNode1.val : 0;
    let value2 = currentNode2 ? currentNode2.val : 0;

    let sum = value1 + value2 + carry;
    currentNode3.val = sum % 10;
    carry = Math.floor(sum / 10);

    if (currentNode1) currentNode1 = currentNode1.next;

    if (currentNode2) currentNode2 = currentNode2.next;

    if (currentNode1 || currentNode2 || carry !== 0) {
      currentNode3.next = new ListNode();
      currentNode3 = currentNode3.next;
    }
  }

  return head;
};
