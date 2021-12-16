input = [
    '4836484555',
    '4663841772',
    '3512484556',
    '1481547572',
    '7741183422',
    '8683222882',
    '4215244233',
    '1544712171',
    '5725855786',
    '1717382281'];

//Part 1
let cavern = {};
let flashedAlready = {};
for (let j = 0; j < input.length; j++) {
    for (let i = 0; i < input[j].length; i++) {
        cavern[[i, j]] = parseInt(input[j][i]);
        flashedAlready[[i, j]] = false;
    }
}

let flashes = 0;
let firstSyncIter = [];

//Part 2 (Run k < 100 times for part 1)
for (k = 0; k < 1000; k++) {
    Object.keys(flashedAlready).forEach(v => flashedAlready[v] = false);
    //Increment each
    for (item in cavern) {
        let coords = item.split(",");
        let x = parseInt(coords[0]);
        let y = parseInt(coords[1]);
        incrementSelf(x, y);
    }
    let oldFlashes = 0;
    let newFlashes = 0;
    //Check for flashing in each
    do {
        oldFlashes = flashes;
        for (item in cavern) {
            let coords = item.split(",");
            let x = parseInt(coords[0]);
            let y = parseInt(coords[1]);
            checkForFlash(x, y);
        }
        newFlashes = flashes;
    } while (newFlashes > oldFlashes)

    let synced = Object.values(flashedAlready).includes(false);
    if (!synced) {
        firstSyncIter.push(k + 1);
        break;
    }
}


function incrementSelf(i, j) {
    if (!flashedAlready[[i, j]]) {
        cavern[[i, j]] += 1;
    }
}

function checkForFlash(i, j) {
    if (cavern[[i, j]] > 9) {
        if (!flashedAlready[[i, j]]) {
            flashedAlready[[i, j]] = true;
            flashes += 1;
            cavern[[i, j]] = 0;
            incrementNeighbours(i, j);
        }
    }
}

function incrementNeighbours(i, j) {
    if (i > 0) {
        incrementSelf(i - 1, j);
        if (j > 0) {
            incrementSelf(i - 1, j - 1);
        }
        if (j < 9) {
            incrementSelf(i - 1, j + 1);
        }
    }
    if (i < 9) {
        incrementSelf(i + 1, j);
        if (j > 0) {
            incrementSelf(i + 1, j - 1);
        }
        if (j < 9) {
            incrementSelf(i + 1, j + 1);
        }
    }
    if (j > 0) {
        incrementSelf(i, j - 1);
    }
    if (j < 9) {
        incrementSelf(i, j + 1);
    }
}

console.log(flashes);
console.log(firstSyncIter);
