/** Node: node for a deque. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Deque -- implemented with doubly linked list

class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add new value to start of list and return undefined
    appendLeft(val) {
        let newNode = new Node(val);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first.prev = newNode;
            this.first = newNode;
        }
        this.size += 1;
        return undefined;
    }

    // add new value to end of list and return undefined
    appendRight(val) {
        let newNode = new Node(val);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.prev = this.last;
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size += 1;
        return undefined;
    }

    // remove item from start of list and return its value
    popLeft() {
        let value = this.first.val;
        if (this.isEmpty()){
            throw new Error('No items in deque')
        } else {
            this.first = this.first.next;
            this.first.prev = null;
            this.size -= 1;
        }
        return value;
    }

    // remove item from end of list and return its value
    popRight() {
        let value = this.last.val;
        if (this.isEmpty()){
            throw new Error('No items in deque')
        } else {
            this.last = this.last.prev;
            this.last.next = null;
            this.size -= 1;
        }
        return value;
    }

    // return item at start of list without removing
    peekLeft() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.first.val;
        }
    }

    // return item at end of list without removing
    peekRight() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.last.val;
        }
    }

    // check to see if there are any items in list
    isEmpty() {
        if (this.size === 0) {
            return true;
        } else {
            return false;
        }
    }
}