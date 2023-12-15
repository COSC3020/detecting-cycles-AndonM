function hasCycle(graph) {
    const visited = new Array(graph.length).fill(false);
    function hasCycleDFS(node, parent) {
      visited[node] = true;
      for (const element of graph[node]) {
        const neighbor = element;
        if (!visited[neighbor]) {
          if (hasCycleDFS(neighbor, node)) {
            return true;
          }
        } else if (neighbor !== parent) {
          return true;
        }
      }
      return false;
    }
    for (let node = 0; node < graph.length; node++) {
      if (!visited[node] && hasCycleDFS(node, -1)) {
        return true;
      }
    }
    return false;
}
