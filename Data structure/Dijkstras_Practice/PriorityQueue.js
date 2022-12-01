class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;
      if (element.priority < parent.priority) {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }

  dequeue() {
    const root = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return root;
  }

  sinkDown() {
    let index = 0;
    const shifted = this.values[0];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = leftIndex + 1;
      let left = this.values[leftIndex];
      let right = this.values[rightIndex];
      let swapIndex = null;

      if (left && left.priority < shifted.priority) {
        swapIndex = leftIndex;
      }
      if (
        (right && swapIndex === null && right.priority < shifted.priority) ||
        (right && swapIndex !== null && right.priority < left.priority)
      ) {
        swapIndex = rightIndex;
      }
      if (swapIndex === null) break;

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = shifted;
      index = swapIndex;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

module.exports = PriorityQueue;
