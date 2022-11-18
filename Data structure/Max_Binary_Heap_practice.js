class MaxBinaryHeap {
  constructor() {
    this.values = [];
    // [Point] index = n인 value의 child의 index는 2n + 1, 2n + 2이다.
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;
      if (element > parent) {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }

  extractTop() {
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

      if (left && left > shifted) {
        swapIndex = leftIndex;
      }
      if (
        (right && swapIndex === null && right > shifted) ||
        (right && swapIndex !== null && right > left)
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
heap.insert(38);
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.extractTop();
console.log(heap);
heap.insert(999);
console.log(heap);
