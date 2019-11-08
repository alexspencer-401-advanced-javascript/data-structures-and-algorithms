const Graph = require('../challenges/graph/graph');

describe('testing of graph data structure', () => {

  it('tests retrieving all nodes', () => {
    const graph = new Graph(6);
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

    for(let i = 0; i < vertices.length; i++) {
      graph.addNode(vertices[i]);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('E', 'C');
    graph.addEdge('C', 'F');

    expect(graph.getNodes()).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);

  });

});