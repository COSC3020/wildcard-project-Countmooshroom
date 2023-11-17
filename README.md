[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11730550&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

## Kruskal's Algorithm

Implement Kruskal's algorithm, and find the worst-case time complexity.

## Runtime Analysis

In the worst case, this algorithm will search through every edge and have bad cases with the detecting cycles function.  At the beginning of my program, it creates an empty tree of size $|V|$.  Then, it builds a priority queue that traverses every edge ($|E|$ time) and sorts the list with a mergesort ($|E|log|E|$ time).  After that, it runs the hasCycle() function for each edge (I originally wrote this function for a different project), which had a time complexity of $|E| + |V|$.

Altogether, I believe this is a total complexity of $|V| + |E| + |E|log|E| + (|E| * (|E| + |V|))$.

This simplifies to $\Theta(|E|^2 + (|E| * |V|))$
