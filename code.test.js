const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


var graph = [
    [[1, 2], [2, 8]],
    [],
    [[3, 4]],
    [[0, 2], [1, 5]]
];
var expected = [
    [[1, 2]],
    [],
    [[3, 4]],
    [[0, 2], [1, 5]]
]
assert(JSON.stringify(kruskal(graph)) == JSON.stringify(expected));



var graph = [
    [[1, 2], [3, 4], [4, 8]],
    [[2, 4]],
    [[0, 4], [3, 1], [4, 3]],
    [[1, 2], [2, 5], [3, 9]],
    [[0, 11], [3, 4]]
];
var expected = [
    [[1, 2], [3, 4], [4, 8]],
    [],
    [[3, 1], [4, 3], [0, 4]],
    [[1, 2]],
    [[3, 4]]
];
assert(JSON.stringify(kruskal(graph)) == JSON.stringify(expected));



var graph = [
    [[1, 2]],
    [[2, 3]],
    [[3, 4]],
    [[0, 5]]
];
var expected = [
    [[1, 2]],
    [[2, 3]],
    [[3, 4]],
    []
];
assert(JSON.stringify(kruskal(graph)) == JSON.stringify(expected));



var graph = [
    [[3, 9]],
    [[0, 2], [2, 4]],
    [[1, 3], [3, 8]],
    [[0, 7], [1, 8]]
];
var expected = [
    [],
    [[0, 2]],
    [[1, 3], [3, 8]],
    [[0, 7], [1, 8]]
];
assert(JSON.stringify(kruskal(graph)) == JSON.stringify(expected));