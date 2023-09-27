# Intro

## What is Sorting?

- The process of **rearranging the items in a collection**
  - so that the items are in some kind of **order**

## Why do we need to learn

- It’s good to know **how it works** becuase sorting is an incredibly common task
  - Inserted sort method를 사용하더라도 어떤 알고리즘으로 sort가 이뤄지는지 이해해야 상황에 적합하게 사용할 수 있다!
- Many different ways to sort and different techniques → Each of them has **own advantages and disadvantages**
  - 데이터가 거의 원하는대로 다 정렬되어 있는 상황에 적합한 알고리즘? → Insertion
  - 지금과 완전히 역순으로 정렬하고자 할 때 적합한 알고리즘?

[https://www.toptal.com/developers/sorting-algorithms](https://www.toptal.com/developers/sorting-algorithms)

- 대표적인 Sort Algorithm
  - Insertion
  - Selection
  - Bubble
  - Shell
  - Merge
  - Heap
  - Quick

Sort Algorithm은 정말 많다. Inserted method도 많고, 원하는대로 직접 만들 수도 있다.  
previous status에 따라(상황에 따라) 적합한, 더 효율적인 알고리즘이 있기 때문에 작동 방식에 대해 이해해두고 상황에 맞는 알고리즘으로 접근하는 것이 필요하다.

# JS has a sort method

- BUT we have to tell How to sort
  - The built-in sort method accepts an optional **comparator function**
    - → tell JS how you want it to sort
    - looks at pairs of elements
    - determines their sort order based on the return value

# Objectives

- Implement sort algorithm
  - bubble
  - selection
  - insertion

# BubbleSort

the largest values bubble up to the top

## Swapping

```
function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}
```

```
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
```

- 나는 이게 더 좋은뎅!

## BubbleSort

### PseudoCode

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
  - if arr[j] is greater that arr[j+1], swap those two values

### Solution 2

```
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1)
        }
    }
    return arr;
}
```

### Solution 1

```
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
```

### Optimized with noSwaps

```
const bubbleSort2 = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1)
            noSwaps = false
        }
    if (noSwaps) break;
    }
    return arr;
}
```

- 데이터가 거의 다 정렬된 상태에서 효과적
  - if(noSwaps) break; 로 Optimized
- BigO O(N2) ~ O(N)
