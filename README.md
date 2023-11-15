[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11730550&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

## Kruskal's Algorithm

Implement Kruskal's algorithm, and find the worst-case time complexity.

## Runtime Analysis

In the worst case, this algorithm will search through every edge and have bad cases with the detecting cycles function.  At the beginning of my program, it creates an empty tree of size $|V|$.  Then, it builds a priority-queue-type-thing that traverses every edge, so it takes $|E|$ time.  Next, it runs through a while loop that iterates over every edge from the queue ($|E|$).  Inside this loop, it takes the next item out of the priority queue.  This queue was built as an array, where the index of each set of edges is the edge length (For example, an edge of length 12 would be stored in queue[12]).  This means that the queue has length $H$, where $H$ is the longest edge, and will take $|H|$ total time to search through by the end of the program.  After that, it just does some linear stuff and also runs the hasCycle() funciton that I wrote for a different project, which had a time complexity of $|E| + |V|$.

Altogether, I believe this is a total complexity of $|V| + |E| + |H| + (|E| * (|E| + |V|))$.

This simplifies to $\Theta(|E|^2 + |E| |V| + |H|)$
