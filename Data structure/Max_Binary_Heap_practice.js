class MaxBinaryHeap {
  constructor() {
    this.values = [];
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
}

// [Point] index = n인 value의 child의 index는 2n + 1, 2n + 2에 위치한다.

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
