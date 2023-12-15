[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11974297&assignment_repo_type=AssignmentRepo)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code; you can base yours on test code from other
exercises.

## Runtime Analysis

We see the outer loop runs through V-1 vertices where V represents all the vertices in the graph taking O(V) time. Inside the loop, the 'hasCycleDFS' function will visit all vertices and edges for every connected component. In a nutshell, in the worst case we must perform a depth-first search for every vertex and edge leading to a total time complexity of O(V + E).
