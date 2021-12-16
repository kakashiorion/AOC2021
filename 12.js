input = [
    'nu-start',
    'rt-start',
    'db-qh',
    'PE-end',
    'sl-rt',
    'qh-end',
    'ZH-rt',
    'nu-rt',
    'PE-db',
    'db-sl',
    'nu-ZH',
    'nu-qh',
    'PE-qh',
    'ZH-db',
    'ne-end',
    'ne-ZH',
    'QG-db',
    'qh-sl',
    'ZH-qh',
    'start-ZH',
    'nu-PE',
    'uf-db',
    'ne-sl'];

//Part 1
let connections = {};
for (item of input) {
    let points = item.split("-");
    if (points[0] in connections) {
        connections[points[0]].push(points[1]);
    } else {
        connections[points[0]] = [points[1]];
    }
    if (points[1] in connections) {
        connections[points[1]].push(points[0]);
    } else {
        connections[points[1]] = [points[0]];
    }
}
console.log(connections);

function isSmallCave(x) {
    if (x != 'start' && x != 'end' && x == x.toLowerCase()) {
        return true;
    }
    return false;
}

function isBigCave(x) {
    if (x != 'start' && x != 'end' && x == x.toUpperCase()) {
        return true;
    }
    return false;
}

function pathCanBeAdded(path, x) {
    if (x == 'start') {
        return false;
    } else if (isSmallCave(x) && path.includes(x)) {
        return false;
    }
    return true;
}

function addNextSteps(path, currentStep) {
    let newPaths = [];
    for (nextItem of connections[currentStep]) {
        if (pathCanBeAdded(path, nextItem)) {
            let np = path.slice();
            np.push(nextItem);
            newPaths.push(np);
        }
    }
    return newPaths;
}

let allPaths = [['start']];
while (!(allPaths.every((p) => p[p.length - 1] == 'end'))) {
    for (path of allPaths) {
        let lastStep = path[path.length - 1];
        if (lastStep != 'end') {
            let np = addNextSteps(path, lastStep);
            allPaths.splice(allPaths.indexOf(path), 1)
            allPaths.push(...np)
        }
    }
}
console.log(allPaths.length);


//Part 2
let smallCaves = [];
for (item in connections) {
    if (isSmallCave(item)) {
        smallCaves.push(item)
    }
}
console.log(smallCaves);

function hasDuplicateSmallCaves(path, x) {
    let foundSmallCaves = {};
    for (item of path) {
        if (isSmallCave(item)) {
            item in foundSmallCaves ?
                foundSmallCaves[item] += 1 : foundSmallCaves[item] = 1;
        }
    }
    let reversedCaves = Object.values(foundSmallCaves).sort((a, b) => a - b).reverse();
    let biggestElement = reversedCaves[0];
    if (foundSmallCaves[x] > 1) {
        return true;
    } else if (biggestElement > 1 && foundSmallCaves[x] == 1) {
        return true;
    }
    return false;
}

function pathCanBeAddedTwice(path, x) {
    if (x == 'start') {
        return false;
    } else if (
        isSmallCave(x) &&
        hasDuplicateSmallCaves(path, x)) {
        return false;
    }
    return true;
}

function addNextSteps2(path, currentStep) {
    let newPaths = [];
    for (nextItem of connections[currentStep]) {
        if (pathCanBeAddedTwice(path, nextItem)) {
            let np = path.slice();
            np.push(nextItem);
            newPaths.push(np);
        }
    }
    return newPaths;
}

allPaths = [['start']];
while (!(allPaths.every((p) => p[p.length - 1] == 'end'))) {
    for (path of allPaths) {
        let lastStep = path[path.length - 1];
        if (lastStep != 'end') {
            let np = addNextSteps2(path, lastStep);
            allPaths.splice(allPaths.indexOf(path), 1)
            allPaths.push(...np)
        }
    }
}
console.log(allPaths.length);