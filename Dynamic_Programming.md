## Dynamic Programming

### Dynamic programming is..

- A method for solving a complex problem

  - by breaking it down into a collection of simpler subproblems
  - solving each of those subproblems just once
  - **storing** their solutions

- Dynamic Programming ONLY works on problems with
  - Optimal substructure
  - Overlapping subproblems

### 동적 프로그래밍 문제 조건

1. Overlapping subproblems

- A problem can be broken down into subproblems which are **reused** several times
  - ex. 피보나치 수열

2. Optimal substructure

- A problem that an optimal solution can be constructed from optimal solutions of its subproblems
  - 하위 문제의 최적 해답을 통해 상위 범주 문제의 최적 해답을 구성할 수 있는 문제
- ex. Graph - Shortest path

### 동적 프로그래밍의 핵심

- 반복되는 하위 문제의 결과값을 저장해두고 사용 -> 같은 하위 문제를 계속해서 풀어야 하는 비효율을 제거
- **Using past knowledge** to make solving a future problem easier

### 동적 프로그래밍 방법

1. Memoization (Top-Down Method)

- Storing the results of expensive function calls
- returning the cached result when the same inputs occur again

2. Tabulation (Bottom-Up Method)

### 피보나치 수열 예시

1. Recursion

   - 시간 복잡도: O(2<sup>n</sup>)
     - f(n) 하위로 fib(n - 1) + fib(n - 2) 2씩 추가되므로 O(2<sup>n</sup>)

   ```js
   function fib(n) {
     if (n <= 2) return 1;
     return fib(n - 1) + fib(n - 2);
   }
   ```

2. Dynamic Programming

   2.1 Memoization

   - 시간 복잡도: O(n)

     - index(여기서 n)으로 memo에 저장해둔 f(n)의 값을 찾는 것의 시간 복잡도는 O(1)
     - n만큼 반복하게 되므로 O(n)

     ```js
     function fib(n, memo = [undefined, 1, 1]) {
       if (!memo[n]) return memo[n];
       const answer = fib(n - 1, memo) + fib(n - 2, memo);
       memo[n] = answer;
       return answer;
     }
     ```

   2.2 Tabulation

   - 시간 복잡도: O(n)

   ```js
   function fib(n) {
     const fibNums = [null, 1, 1];

     if (n <= 2) return fibNums[n];
     for (const i = 3; i <= n; i++) {
       fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
     }

     return fibNums[n];
   }
   ```
