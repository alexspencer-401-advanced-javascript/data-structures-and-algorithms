class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addNode(value) {
    this.AdjList.set(value, []);
    return this.AdjList;
  }

  addEdge(node1, node2) {
    this.AdjList.get(node1).push(node2);
    this.AdjList.get(node2).push(node1);
  }

  getNodes() {
    const keys = this.AdjList.keys();
    let newArr = [];
    for(let i = 0; i < this.noOfVertices; i++) {
      newArr.push(keys.next().value);
    }
    return newArr;
  }

}

module.exports = Graph;