const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let dummyNode = new ListNode(0);
  dummyNode.next = l;
  let current = dummyNode;

  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummyNode.next;
}

module.exports = {
  removeKFromList
};

function createLinkedList(arr) {
  let head = null;
  let current = null;

  for (let value of arr) {
    if (!head) {
      head = new ListNode(value);
      current = head;
    } else {
      current.next = new ListNode(value);
      current = current.next;
    }
  }
  return head;
}

function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}




module.exports = {
  removeKFromList
};
