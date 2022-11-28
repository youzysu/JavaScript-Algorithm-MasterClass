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
}
