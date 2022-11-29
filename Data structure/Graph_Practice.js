class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(firstVertex, secondVertex) {
    this.adjacencyList[firstVertex].push(secondVertex);
    this.adjacencyList[secondVertex].push(firstVertex);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    const helperDFS = (vertex) => {
      if (!adjacencyList[vertex]) return null; // 예외 처리
      if (!vertex) return null; // 그래프 맨끝에 더이상 vertex가 없을 때
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return helperDFS(neighbor);
      });
    };
    helperDFS(start);
    return result;
  }

  depthFirstIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    visited[start] = true;

    while (stack.length) {
      const current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirstSeartch(start) {
    const result = [];
    const queue = [start];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log(result);
    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g.depthFirstRecursive('A'); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
g.depthFirstIterative('A'); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]

// Iterative 방식에서 stack에서 pop으로 다음에 탐색할 vertex를 정하므로 알파벳 역순으로 나타남
g.depthFirstRecursive('D'); // [ 'D', 'B', 'A', 'C', 'E', 'F' ]
g.depthFirstIterative('D'); // [ 'D', 'F', 'E', 'C', 'A', 'B' ]

g.breadthFirstSeartch('A'); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
g.breadthFirstSeartch('D'); // [ 'D', 'B', 'E', 'F', 'A', 'C' ]
