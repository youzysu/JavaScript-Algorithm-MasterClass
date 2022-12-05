## Dynamic Programming

- A method for solving a complex problem

  - by breaking it down into a collection of simpler subproblems
  - solving each of those subproblems just once
  - **storing** their solutions

- Dynamic Programming ONLY works on problems with
  - Optimal substructure
  - Overlapping subproblems

1. Overlapping subproblems

- A problem can be broken down into subproblems which are **reused** several times
  - ex. 피보나치 수열

2. Optimal substructure

- A problem that an optimal solution can be constructed from optimal solutions of its subproblems
  - 하위 문제의 최적 해답을 통해 상위 범주 문제의 최적 해답을 구성할 수 있는 문제
- ex. Graph - Shortest path
