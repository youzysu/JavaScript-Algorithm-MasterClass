## Objective

- Define What Recursion is
- How it can be used
- Understand the TWO essential components of a recursive function
- Visualize the call stack to better debug
- Use helper method recursion and pure recursion

## What is recursion

- A process that calls itself
- a function that calls itself

## How it can be used

- It’s everywhere
  - JSON.parse / JSON.stringfy
  - document.getElementById and DOM traversal algorithms
  - Object traversal
  - It’s sometimes a cleaner alternative to iteration with more complex data strutures.

## The Call stack

- Static data structure(stack) that manages what happens when functions are invoked.
  - functions are added to the top of the call stack
  - function is removed first from the top

## How recursive functions work

- **Invoke the same function** with a **different input** until you reach your **base case**
  - Base Case: The condition when the recursion ends

#### An example

- Recursive
  - Base Case: num <= 0
  - same function: countDown(num)
  - different input: num--
  - num을 1씩 줄여가면서 num이 0 이하일 때까지 CountDown을 반복 실행

```
function countDown(num) {
  if (num <= 0) {
    return console.log("All done!")
  }
  console.log(num)
  num--;
  countDown(num)
}
```

- Iterative

```
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}
```

## Recursive function 2: SumRange

```
function sumRange(num){
   if(num === 1) return 1;
   return num + sumRange(num-1);
}
```

```
sumRange(4)
```

- 4 + sumRange(3)
  - 3 + sumRange(2)
    - 2 + sumRange(1)
      - 1
- 4 + (3 + (2 + (1)))

## Recursive function 3: Factorial

- Iterative

```
function factorial(num) {
  let total = 1
  for(let i = num; i > 2; i--) {
    total *= i
  } return total
}
```

- Recursive
  - Recursive part를 일반화시킨 식으로 작성
    - factorial(num) = num \* factorial(num - 1)
  - End Point 작성 (Base Case)
    - if (num === 1) return 1

```
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}
```

## When Stack Overflow

- no base case → RangeError: Maximum call stack size exceeded
- Forgetting to return or returning the wrong thing

## Helper Method Recursion

- an outer function(NOT recursive) calls an inner function(recursive)

```
function outer(input) {
  let outerScopedVariable = []

  function helper(helperInput) {
    ... // modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)

  return outerScopedVariable;
}
```

### A example

function collectOddvalues

```
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helpInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }

  helper(arr)
  return result;
}
```

## Pure Recursion

- Totally self-contained and it is recursive

```
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0])

  return newArr.concat(collectOddValues(arr.slice(1)))
}
```

```
collectOddValues([1, 2, 3, 4, 5])
```

- [1].concat(collectOddValues([2, 3, 4, 5])); [1].concat([3, 5]) === [1, 3, 5]
  - [].concat(collectOddValues([3, 4, 5])) === [].concat([3, 5]) === [3, 5]
    - [3].concat(collectOddValues([4, 5])) === [3].concat([5]) === [3, 5];
      - [].concat(collectOddValues([5])) === [].concat([5]) === [5]
        - [5].concat(collectOddValues([])) === [5].concat([]) === [5]
          - []

### Pure Recursion Tips

- For Arrays
  - Use methods like slice, the spread operator, and concat
  - that make copies of arrays so you don’t mutate them (기존 array 그대로 유지)
- For Strings
  - Use method like slice, substr, substring to make copies of strings
  - Strings are immutable
- For Objects
  - Use Object.assign, or the spread operator to make copies
