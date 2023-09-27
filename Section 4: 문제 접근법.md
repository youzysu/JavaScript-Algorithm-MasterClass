# Algorithms and Problem Solving Patterns

- solution을 모르는 문제를 풀기 위한 기본 접근 방식(Steps to solve the problem)

## OBjectives

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns
  - frequency counters, two pointer problems, divide and conquer…

## What is An Algorithm?

A process or set of steps to accomplish a certain task.

- 특정 작업을 달성하기 위한 과정이나 일련의 단계
- 문제를 해결하기 위해 수행해야 하는 일련의 수학적 단계

## Why do I need to know Algorithm?

Almost everything that you do in programming involves some kind of algorithm.

the Algorithm is the foundation for being a successful problem solving and developer.

어려운 질문에 답해야 하거나 전에 본 적 없는 문제를 마주했을 때 어떻게 해야 할까?

단계에 따라 문제를 해결해야 한다.

## How Do I Improve?

- Turned your problem solving approaches

1. **Devise a plan** for solving problem

   1. 문제 해결을 위한 계획을 수립하는 것
   2. 문제에 접근하는 방식, 문제를 세분화하기 위한 전략
   3. 해결책을 찾도록 도와준다.

2. Master common **problem solving patterns**

   1. 일반적인 문제 해결 패턴을 파악
   2. Some category에 속하는 알고리즘 문제는 수행해야 하는 몇가지 steps를 따르면 되고, 이들을 조합해서 알고리즘을 짤 수 있다.

## Problem Solving 5 Steps

1. Understand the problem
2. explore concrete examples
3. break it down
4. solve/simplify
5. look back and refactor

### 1. 문제 이해 Understand the problem

문제를 이해하기 위해 던져야 할 질문 5가지

1. Can I restate the problem **in my own word**?

   1. 문제를 확실히 이해하고 시작하기
   2. 문제/질문에 대해 **내 방식대로** 다시 생각해보기

2. What are **the inputs** that go into the problem?
3. What are **the outputs** that should come from the solution to the problem?
4. Can the outputs be determined from the inputs?

   1. Do I have enough information to solve the problem?

5. How should I **label the important pieces of data** that are a part of the problem?

#### [example]

Write a function which takes two numbers and returns their sum.

1. 두 수 더하기
2. 숫자 2개

   1. 숫자가 정수인지 부동 소수점인지?
   2. 숫자가 얼마나 큰지 자바스크립트로 입력할 수 있는 숫자의 최댓값이 limited
   3. input 개수가 부족할 때는?

3. output은 정수? 부동 소수점? 문자열로 반환?(type)

### 2. Explore Examples

After understanding the problem in your own words, then you come up with examples.

- **Coming up with examples** can help you **understand the problem better**
- Examples also provide sanity checks that your eventual solution works how it should.

1. Start with Simple examples
2. Progress to More Complex examples
3. explore examples with empty inputs and invalid inputs

#### [example]

Write a function which takes in a string and returns counts of each character in the string.

[Step 1] Understanding the problem

- 문자열을 각각 문자로 나눠서 각 문자가 몇 번씩 있는지 count하는 함수 charCount

[Step 2] Coming up with examples

예시를 통해 문제를 이해하는 과정

```
charCount("aaaa"); // {a:4}
```

- input은 string, output은 object여야겠다.

```
charCount("hello") // {h:1, e:1, l:2, o:1}
```

- string에 포함된 character만 return하고, 포함되지 않은 character는 포함시키지 않아도 된다.

```
charCount("my phone number is 182763")
```

- string이라면?
  - 특수기호, 숫자는 포함해야 할까?

```
charCount("Hello hi")
```

- 대문자와 소문자는 구분하지 않고 같이 count하려면?

```
charCount("")
charCount()
```

- 아무 input을 입력하지 않거나 빈 문자열인 경우에는 뭘 Return 하지?

### 3. 문제 세분화 Break It Down

To communicate **what is the task** to solve the problem → 문제나 과제를 할 때 수행해아 하는 작업이 무엇인지 communication을 위해

- Explicitly write out **the steps you need to take** (Devise code structure)
  - 문제를 해결하기 위한 단계를 명확하게 작성해보기
  - Write just the **BASIC COMPONENTS** of the solution.
    - 실제로 코드를 입력하기 전에 생각해볼 수 있는 시간
    - 자유분방하게 코드를 대충 떠오르는대로 입력하지 말고!
    - 감이 잡히지 않거나 이해되지 않는 부분들을 파악하고 이해할 수 있음 (어디서 무엇을 모르는지)

```
function charCount(str) {
  // make object to return at end
  // loop over string, for each character
    // if the character is a NUMBER/LETTER && a key in object, add one to counts
    // if the character is a NUMBER/LETTER && not in object, add it and set value to 1
    // if the character is something else(NOT a number/letter) don't do anything
  // return object at end
}
```

**The most important thing to solve the problem: PROCESS**

- 문제 해결 과정이 중요하다. 문제를 어떻게 해결해나가는지, 풀어나가는 과정, 알고리즘을 작성하는 과정이 중요하다.
- 단계를 작성하여 접근 방식을 공식화한 건 실제로 문제를 해결하지 못했더라도 수행해야 할 작업을 알고 있다는 의미  
   → 작업에 대한 틀을 잡을 수 있는 능력이 있다는 걸 보여준다.
- 실제 코드까지 작성하지는 못했더라도 방향이나 기본적인 개념은 알고 있고 해결 능력이 있다는 걸 보여줄 수 있다.
- 복잡한 문제일 때 이렇게 적어둔 단계가 문제 해결의 실마리가 될 수 있다.

### 4. **Solve** the problem → If you can’t solve, **simplify**

- How to simplify? Solve a SIMPLER problem
  - **Find the core difficulty** in what you’re trying to do
  - **Temporarily ignore** the core difficulty
  - Write a **simplified** solution
  - Then incorporate that difficulty back in 그러고나서 가능하다면 어려운 부분을 다시 통합시킨다.

**Process to solve the problem**

1. 가장 어렵고 까다로운 부분은 일단 무시한다.
2. 간단하게 작성할 수 있는 기본 로직부터 코드를 작성한다.
3. 그리고 또 다음으로 해결이 더 쉬워보이는 Task부터 기존 코드에 더해 추가한다.
4. 이 과정에서 각 단계 별로 다양한 해결 방법을 떠올려보고, 찾아보고, 무엇이 최선인지, 어떻게 구현해야 할지 등 해결 방법, 접근 방식에 대한 질문을 정리한다.
5. 정해진 시간 내에 해결할 수 있는 부분까지 반복한다.
6. 작성한 질문에 대해 강의나 구글링을 통해 해답을 찾아 해결한다.

- 절대 성급하게 코드 작성부터 하지 말 것
- 구현하기 가장 쉬운 문제부터 찾아 작성하고, 다음 어려운 부분을 연결해나가기
- 무엇이 어려운지라도 작성하기

#### [Example]

- 해결할 수 있는 Task부터 코드를 작성한다.

```
function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    // if the character is a NUMBER/LETTER && a key in object, add one to counts
    // if the character is a NUMBER/LETTER && not in object, add it and set value to 1
    const char = str[i]
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1
    };
  }
    // if the character is something else(NOT a number/letter) don't do anything
  // return object at end
  return result;
}
```

- 다음으로 쉬워보이는 Task부터 구현한다.
- ```
    const char = str[i].toLowerCase()
  ```

  - [TASK] 대문자와 소문자는 구분하지 않고 같이 count
  - Find how to do [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  - char 변수에 .toLowerCase() 추가

- [Task] 문자가 영어, 숫자인지 여부를 확인하기
  - 정규식을 활용하여 문자가 영어나 숫자인지를 확인하는 if문 추가

```
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1
      };
    };
```

### 5. Look back & Refactor

- The Most important step to improving becoming a better developer !!
- 코드를 한줄씩 살펴보면서 마음에 들지 않는 부분, 형태, 해석 방법, 이해하기 얼마나 쉬운지 다시 되돌아보는 과정
- 코드의 성능을 개선하거나, 코드의 가독성을 높이거나
  - 더 빨리 처리할 수 있는 다른 방법을 검색해보고 다시 작성해보기

#### Refactoring Questions

Can I…

- check the result?
- derive the result differently?
  - 현재 방식 이외에 생각나는 다른 방식으로 결과 도출해보기
  - 내가 생각하지 못한 다른 방식이 있는지 찾아보기
- understand it at a glance?
  - 해결책이 얼마나 직관적인지
- use the result or method for some other problem?
  - 다른 문제에도 이 결과나 방법을 적용할 수 있을지 → 다른 문제를 해결할 수 있는 직관이 향상된다
  - THIS problem and solution이 이전에 접했던 것과 유사점이 있는지 → 다른 프로젝트나 다른 회사의 다른 문제에 대한 해결책이 될 수 있다.
- improve the performance of solution?
  - Analyze by time complexity and space complexity
- think of other ways to refactor
- How have other people solved this problem?
  - 다른 사람들은 같은 문제를 어떻게 해결했는지 보면 많이 배울 수 있다.
  - 다른 구현 방식을 살펴보기 → find ideas and different approaches

꼭 코드를 다시 작성하지 않더라도 HOW USEFUL LOOKING BACK YOUR CORD IS!

#### [Example]

```
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1
      };
    };
  }
  return result;
}
```

1. for loop 수정

- for loop에서 index를 받아서 문자로 바꾸고 있음 → for of 를 적용하면 char를 바로 출력할 수 있음

```
for (let char of str) {
  const char = char.toLowerCase();
}
```

2. 이중 if문 수정 (가독성)

```
if (/[a-z0-9]/.test(char)) {
  result[char] = ++result[char] || 1;
    };
```

3. 문자가 영어, 숫자인지 확인하는 더 효율적인 방식 탐색 & 적용

[사고 과정]

- ‘정규 표현식이 효율적인지 잘 모르겠다’, ‘정규 표현식이 수행 중인 작업과 브라우저 환경에 따라 성능이 달라질 수 있다는 걸 어디서 주워 들었는데..’  
   → 더 효율적인 방식은 없을까? 다른 사람은 어떻게 할까?
- 탐색하기 charCodeAt
  - [https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript](https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript)
- 적용하기

```
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47) && code < 58) &&
      !(code > 64) && code < 91) &&
      !(code > 96) && code < 123)) {
      return false;
      } return true;
}
```

- After refactoring

```
function charCount(str) {
  let answer = {};
  for (let char of str) {
  if (isAlphaNumeric(char)) {
    const char = char.toLowerCase();
    result[char] = ++result[char] || 1;
    }
  }
  return answer;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47) && code < 58) &&
      !(code > 64) && code < 91) &&
      !(code > 96) && code < 123)) {
      return false;
      } return true;
}
```

Small Tip > 가장 단순하고 기본적인 문법으로 생각나는대로 편하게 작성한 후 나중에 전반적으로 코드 정리하기

## Conclusion

새로운 문제나 과제를 해결하는 과정 5 Steps

1. Understand the problem 문제를 확실히 이해한다

   1. 문제를 이해하기 위해 던져야 할 질문 5가지

      1. Can I restate the problem in my own word?
      2. What are the inputs that go into the problem?
      3. What are the outputs that should come from the solution to the problem?
      4. Can the outputs be determined from the inputs?
      5. How should I label the important pieces of data that are a part of the problem?

2. Explore examples 예시를 보고 문제를 구체화한다.

   1. Start with Simple examples
   2. Progress to More Complex examples
   3. explore examples with empty inputs and invalid inputs

3. Break down the problem 문제를 세분화한다.

   1. 절대 무작정 코드를 작성하지 않는다. 문제를 해결하기 위한 단계를 명확하게 작성한다.

      1. Explicitly write out **the steps you need to take** (Devise code structure)
      2. Write just the **BASIC COMPONENTS** of the solution.

4. Solve & Simplify

   1. 문제를 단순화시키고 해결할 수 있는 문제부터 처리한다.
   2. 해결할 수 있는 부분부터 먼저 구현하고 어려운 부분을 덧붙여 연결하여 코드를 통합시킨다.

5. Look back & Refactor

   1. 다른 사람의 해결책이나 자신의 해결책을 면밀히 살펴보고 개선점을 파악하여 다시 작성한다.

Especially in INTERVIEW you encountered super crazy hard problem or in mental crash

Follow these 5 steps

- 문제 이해, 한 두가지 예시 살펴보기, 문제를 세분화하여 작업을 수행하기, 수행 단계를 작성하는 걸 확실히 인지시키기, 문제를 해결하고 코드를 다시 살펴보고 고치기, 개선점과 관련하여 comment 남기면 good
