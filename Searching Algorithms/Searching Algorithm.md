# Searching Algorithms

### Contents

- what is a searching algorithm?
- linear search (선형 검색)
- binary search (이진 검색)
- naive string searching algorithm (나이브 문자열 검색)

## 1. Linear Search

- Useful when we search with an **unsorted** piece of data

### 🔎 How search methods work?

- Search methods on arrays in JavaScript: indexOf, includes, find, findIndex

```js
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
```

### 🔎 Linear Search BIG O

- Best: O(1)
- Average: O(n)
- Worst: O(n)

## 2. Binary Search

- Binary search is a much **faster** form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
  - Divide and Conquer
- Binary search only works on **sorted** arrays

```js
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== value && left <= right) {
    if (arr[middle] < value) left = middle + 1;
    else right = middle - 1;
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === value ? middle : -1;
}
```

### 🔎 Binary Search BIG O

- Best: O(1)
- Average & Worst: O(log n)

## 3. Naive String Search

- Count the number of times a smaller string appears in a longer string
- checking pairs of characters individually

```js
function naiveSearch(long, short) {
  let count = 0;
  let shortCurrentIndex = 0;
  let longCurrentIndex = 0;

  while (longCurrentIndex < long.length) {
    if (short[shortCurrentIndex] === long[longCurrentIndex]) {
      shortCurrentIndex++;
      longCurrentIndex++;
    }
    if (shortCurrentIndex === short.length) {
      count++;
      shortCurrentIndex = 0;
    }
    if (short[shortCurrentIndex] !== long[longCurrentIndex]) {
      longCurrentIndex++;
    }
  }
  return count;
}
```
