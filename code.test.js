const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

function isGraphCyclic(graph) {
  return hasCycle(graph);
}
function graphProperty(graph) {
  const connectedGraph = createConnectedGraph(graph);
  return isGraphCyclic(connectedGraph) === hasCycle(connectedGraph);
}
function createConnectedGraph(graph) {
  const numNodes = Object.keys(graph).length;
  const connectedGraph = new Array(numNodes).fill(null).map(function () {
    return [];
  });
  for (let i = 0; i < numNodes; i++) {
    for (let j = 0; j < numNodes; j++) {
      if (i !== j) {
        connectedGraph[i].push(j);
      }
    }
  }
  return connectedGraph;
}

jsc.assert(graphProperty, { tests: 1000 });
