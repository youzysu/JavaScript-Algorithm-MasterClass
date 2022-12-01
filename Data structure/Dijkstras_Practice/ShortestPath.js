const PriorityQueue = require('./PriorityQueue');

class ShortestPath {
  #path;

  constructor(weightedGraph) {
    this.adjacencyList = weightedGraph.getAdjacencyList();
    this.visitList = new PriorityQueue();
    this.minDistance = {};
    this.previous = {};
    this.#path = [];
  }

  Dijkstra(start, end) {
    this.initializeState(start);
    this.visitVertex();
    this.createPath(start, end);
  }

  initializeState(start) {
    for (const vertex in this.adjacencyList) {
      this.previous[vertex] = null;

      if (vertex === start) {
        this.minDistance[vertex] = 0;
        this.visitList.enqueue(vertex, 0);
        continue;
      }

      this.minDistance[vertex] = Infinity;
    }
  }

  visitVertex() {
    while (this.visitList.values.length) {
      const minWeightVertex = this.visitList.dequeue().value;
      const neighbors = this.adjacencyList[minWeightVertex];

      neighbors.forEach((neighbor) => {
        const neighborVertex = neighbor.node;
        const candidate = this.minDistance[minWeightVertex] + neighbor.weight;

        if (candidate < this.minDistance[neighborVertex]) {
          this.minDistance[neighborVertex] = candidate;
          this.previous[neighborVertex] = minWeightVertex;

          this.visitList.enqueue(neighborVertex, candidate);
        }
      });
    }
  }

  createPath(start, end) {
    let stopOver = end;

    while (this.previous[stopOver]) {
      this.#path.push(stopOver);
      stopOver = this.previous[stopOver];
    }

    this.#path.push(start);
    return this.#path.reverse();
  }
}

module.exports = ShortestPath;
