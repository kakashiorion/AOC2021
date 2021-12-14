input = [1, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 4, 2, 4, 1, 1, 1, 1, 1, 5, 4, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 2, 4, 1, 3, 1, 1, 2, 1, 2, 1, 1, 4, 1, 1, 1, 4, 3, 1, 3, 1, 5, 1, 1, 3, 4, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2, 5, 5, 3, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 4, 1, 5, 5, 1, 1, 5, 3, 4, 4, 4, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 1, 1, 2, 2, 1, 2, 2, 5, 1, 1, 1, 2, 1, 1, 1, 1, 3, 4, 5, 1, 2, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 4, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 5, 4, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 3, 1, 1, 1, 3, 1, 4, 2, 1, 5, 1, 3, 5, 5, 2, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 2, 4, 3, 1, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 2]


//Part 1
let origFish = input.slice();
let newFish = [];
for (let i = 0; i < 80; i++) {
    newFish = [];
    for (fish of origFish) {
        if (fish == 0) {
            newFish.push(6);
            newFish.push(8);
        } else {
            newFish.push(fish - 1);
        }
    }
    origFish = newFish.slice();
}

console.log(newFish.length);

//Part 2
// origFish = input.slice();
// for (let i = 0; i < 256; i++) {
//     newFish = [];
//     for (fish of origFish) {
//         if (fish == 0) {
//             newFish.push(6);
//             newFish.push(8);
//         } else {
//             newFish.push(fish - 1);
//         }
//     }
//     origFish = newFish.slice();
// }

// console.log(newFish.length);

let dict = {
    0: 0, 6: 0, 7: 0, 8: 0
};
for (fish of input) {
    dict[fish] = [fish] in dict ? dict[fish] + 1 : 1;
}
console.log(dict);

for (let j = 0; j < 256; j++) {
    let newBorn = dict[0];
    dict[0] = dict[1];
    dict[1] = dict[2];
    dict[2] = dict[3];
    dict[3] = dict[4];
    dict[4] = dict[5];
    dict[5] = dict[6];
    dict[6] = dict[7] + newBorn;
    dict[7] = dict[8];
    dict[8] = newBorn;
}

console.log(dict)
let s = Object.values(dict).reduce((a, b) => a + b)
console.log(s);