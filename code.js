//Kruskal's Algorithm
function kruskal(graph) {

    //Start with an empty tree T
    let tree = [];
    for (let i = 0; i < graph.length; i++) {
        tree[i] = [];
    }
    //Build a priority-queue-type-thing
    let queue = [], cost = 0, index = 0;
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (queue[graph[i][j][1]] == undefined) {
                queue[graph[i][j][1]] = [];
            }
            queue[graph[i][j][1]].push([i, j]);
        }
    }

    //Add the minimum weight edge to T unless it forms a cycle
    while (cost < queue.length - 1 || index < queue[cost].length) {
        while (queue[cost] == undefined || index >= queue[cost].length) {
            cost++;
            index = 0;
        }
        let edge = queue[cost][index++];

        tree[edge[0]].push(graph[edge[0]][edge[1]]);
        if (hasCycle(tree)) {
            tree[edge[0]].splice(tree[edge[0]].length - 1, 1);
        }
    }
    return tree;
}

function hasCycle(graph) {
    //Initialize Storage
    let visited = new Array(graph.length).fill(false);

    //Start from every node that has not been already visited
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            if (checkFromNode(i, [])) { return true; };
        }
    }
    //Recursively run through the graph starting at one node
    function checkFromNode(node, checked) {
        if (checked.includes(node)) { return true; }
        visited[node] = true;
        checked.push(node);
        for (let j = 0; j < graph[node].length; j++) {
            if (checkFromNode(graph[node][j][0], [...checked])) { return true; }
        }
        return false;
    }
    return false;
}