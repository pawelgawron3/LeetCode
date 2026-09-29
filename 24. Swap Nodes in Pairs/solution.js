/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null;

  let currentNode = head;
  let moveHead = true;

  while (currentNode.next) {
    let tempNode = currentNode.next;

    currentNode.next = currentNode.next.next;

    tempNode.next = currentNode;

    if (moveHead) {
      head = tempNode;
      moveHead = false;
    }

    if (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode = currentNode.next;
        continue;
      }

      tempNode = currentNode.next;

      currentNode.next = currentNode.next.next;

      currentNode = tempNode;
    }
  }

  return head;
};
