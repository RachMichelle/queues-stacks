/** Node: node for a stack. */

// ***not needed, tracking with data array using push/pop/find at specific index only to keep O(1)
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    // this.first = null;
    // this.last = null;
    this.data = [];
    this.size = 0;

  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this.data.push(val);
    this.size += 1;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.isEmpty()){
      throw new Error('No values in stack')
    } else {
      this.size -=1;
      return this.data.pop();
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.isEmpty()){
      return null;
    } else {
      return this.data[this.size-1];
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
