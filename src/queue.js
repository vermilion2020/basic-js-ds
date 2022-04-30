const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {

  _queue = null;
  
  getUnderlyingList() {
    return this._queue;
  }

  enqueue( value ) {
    let newNode = new ListNode(value);
    let current = this._queue;
    if(!current) {
        this._queue = newNode 
    } else {
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
  }

dequeue() {
    let current = this._queue.value;
    let next = this._queue.next;
    this._queue = next;

    return current;
  }
}

module.exports = {
  Queue
};
