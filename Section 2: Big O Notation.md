# Objectives

- Motivate **the need** for Big O Notation
- **What** Big O Nation is
- Simplify Big O **Expressions**
- Define “**time complexity**” and “**space complexity**”
- **Evaluate** the time complexity and space complexity of different algorithms using Big O Nation
- Describe what a **logarithm** is

# **the need** for Big O Notation

- Imagine we have multiple implementations of the same function, but different approach.
- “How can we determine which one is the best?”  
   → Big O Notation을 통해 여러 가지 코드를 서로 비교하고 성능을 평가
- Example, “Write a function that accepts a string input and returns a reversed copy”
  - So many solutions..
  - 코드를 비교하거나 분류할 수 있는 System이 필요하다!

the need for Big O Notation

- to have a precise vocabulary to talk about how our **code performs**
- Useful for discussing trade-offs between different approaches
- When code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
- it comes up in interviews also!

# A example

N이 주어졌을 때 1부터 N까지의 합 구하는 function

- for loop

```
function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total;
}
```

- 등차수열 공식

```
function sum(n) = {
  return n * (n+1) / 2;
}
```

→ 둘 중에 어느 것이 better?

“What does **better** mean?”

- Faster? 속도 → 코드가 실행하는데 걸리는 시간 (Time Complexity)
- Less memory-intensive? 메모리 사용량 (Space Complextity)
- More readable?

코드를 비교하는 기준에 대한 문제

# Time Complexity

# Big O Notation

A way to formalize fuzzy counting (대략적으로 counting하는 공식화한 방식)

**How the runtime of an algorithm grows** as the inputs grow

input value가 커질수록 알고리즘이 얼마나 효율적인지 표현하는 방식 by 전반적인 추세, 경향

- O(1)
- O(n)
- O(n2)

Helpful rules to analyze complexity with Big O(that won’t always work)

1. Arithmetic operations(+, -, \*, /) : constant
2. Variable assignment : constant

   1. N이 10이든.. 100이든.. 1000000이든.. 똑같다

3. array에서 index를 통해, object에서 key를 통해 element에 접근하는 것 : constant

   1. index가 1이든.. 10000이든.. 똑같다

4. But **In a loop** the complexity is the length of the loop times

   1. for문의 개수에 따라 n이 커질수록 연산의 개수가 비례적으로 늘어남

**Big O Notation**

- function의 runtime을 Big O Notation으로 표현
- function Algorithm의 효율성을 공식적으로 비교하는 방식

# Space Complexity

Analyze the runtime of an algorithm as **the size of the inputs increases**

Space required by the algorithm, not including space taken up by the inputs

## Space Complexity in JavaScript

- Most primitives(Booleans, numbers, undefined, null) → constant space
- Strings → O(n) space
  - Where n is the string length
- Reference types → generally O(n) space
  - where n is the length of array or the number of keys in objects

### Space Complexity O(1)

input arr.length = 1일 때

```
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
  total += arr[i];
  }
  return total;
}
```

### Space Complexity O(n)

input arr.length = n일 때

```
function sum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return total;
}
```

## 결론

어떤 Algorithm에 대해 Space Complexity, Time Complexity를 Big O Notation으로 이해하고 평가할 수 있으면 된다!

# Logarithms

- O(log n)
- O(\_n_log n)

## When Logarithms are used

- **Searching** algorithms → sometimes have logarithmic **time** complexity
- **Sorting** algorithms → involve logarithms (something efficient)
- Recursion → involve logarithmic **space** complexity

# Conclusions

- Big O Notation → Analyze the performance of an algorithm
  - 1. How the runtime changes
  - 2. How the space complexity changes
