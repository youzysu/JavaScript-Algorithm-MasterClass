# BUILT-IN Data Structure through the lens of Big O

- Object : Unordered, key value pairs
  - When to use objects?
    - you don’t need order
    - you need **fast access, insertion and removal**
  - → you don’t need and ordering, Using objects are an excellent choice if you wanna make data structure.
- Array : **Ordered** lists
  - When to use arrays? you need order you need fast access, insertion and removal (sort of…)

## Objectives

- Understand how objects and arrays work, through Big O
- Why adding element to the beginning of an array is costly
- compare and contrast the runtime for arrays and objects, built-in methods(like sort, forEach)

### Big O of Objects

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

### Big O of Object Methods

- Object.keys - O(N)
- Object.values - O(N)
- object.entries - O(N)
- hasOwnProperty - O(1)

## Big O of Arrays

- **Access - O(1)**
  - not O(n)! It doesn’t matter how long the array, it’s the last item or middle item…
- Searching - O(N)
- Insertion, Removal - it depends Where we’re inserting
  - push, pop - O(1)
  - shift, unshift - O(N)
  - concat, slice, splice, forEach, map, filter, reduce, … - O(N)
  - sort - O(N \* log N)

Inserting at **the beginning** is not as easy as we might think.

There are more efficient data structures for that (- Linked List…)
