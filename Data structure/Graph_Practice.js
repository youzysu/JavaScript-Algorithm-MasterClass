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
g.depthFirstRecursive('D'); // [ 'D', 'B', 'A', 'C', 'E', 'F' ]
g.depthFirstRecursive('G');
