const template = 'KHSSCSKKCPFKPPBBOKVF';

const rules = [
    'OS -> N',
    'KO -> O',
    'SK -> B',
    'NV -> N',
    'SH -> V',
    'OB -> V',
    'HH -> F',
    'HP -> H',
    'BP -> O',
    'HS -> K',
    'SN -> B',
    'PS -> C',
    'BS -> K',
    'CF -> H',
    'SO -> C',
    'NO -> H',
    'PP -> H',
    'SS -> P',
    'KV -> B',
    'KN -> V',
    'CC -> S',
    'HK -> H',
    'FN -> C',
    'OO -> K',
    'CH -> H',
    'CP -> V',
    'HB -> N',
    'VC -> S',
    'SP -> F',
    'BO -> F',
    'SF -> H',
    'VO -> B',
    'FF -> P',
    'CN -> O',
    'NP -> H',
    'KK -> N',
    'OP -> S',
    'BH -> F',
    'CB -> V',
    'HC -> P',
    'KH -> V',
    'OV -> V',
    'NK -> S',
    'PN -> F',
    'VV -> N',
    'HO -> S',
    'KS -> C',
    'FP -> F',
    'FH -> F',
    'BB -> C',
    'FB -> V',
    'SB -> K',
    'KP -> B',
    'FS -> C',
    'KC -> P',
    'SC -> C',
    'VF -> F',
    'VN -> B',
    'CK -> C',
    'KF -> H',
    'NS -> C',
    'FV -> K',
    'HV -> B',
    'HF -> K',
    'ON -> S',
    'CV -> N',
    'BV -> F',
    'NB -> N',
    'NN -> F',
    'BF -> N',
    'VB -> V',
    'VS -> K',
    'BK -> V',
    'VP -> P',
    'PB -> F',
    'KB -> C',
    'VK -> O',
    'NF -> F',
    'FO -> F',
    'PH -> N',
    'VH -> B',
    'HN -> B',
    'FK -> K',
    'PO -> H',
    'CO -> B',
    'FC -> V',
    'OK -> F',
    'OF -> V',
    'PF -> F',
    'BC -> B',
    'BN -> O',
    'NC -> K',
    'SV -> H',
    'OH -> B',
    'PC -> O',
    'OC -> C',
    'CS -> P',
    'PV -> V',
    'NH -> C',
    'PK -> H']


let reactions = {};
for (item of rules) {
    let values = item.split(" -> ");
    reactions[values[0]] = values[1]
}
// console.log(reactions);

//Part 1
function applyReaction(initialPolymer) {
    let newPolymer = 'X';
    for (let i = 0; i < initialPolymer.length - 1; i++) {
        let key = initialPolymer.substring(i, i + 2);
        let toBeInserted = reactions[key];
        key = key.slice(0, 1) + toBeInserted + key.slice(1);
        newPolymer = newPolymer.substring(0, newPolymer.length - 1);
        newPolymer = newPolymer + key;
    }
    return newPolymer
}

let polymerTemplate = template.slice();
for (let k = 0; k < 10; k++) {
    let newTemplate = applyReaction(polymerTemplate);
    polymerTemplate = newTemplate.slice();
}

let elements = {}
for (item of polymerTemplate) {
    if (item in elements) {
        elements[item] += 1
    } else {
        elements[item] = 1
    }
}
console.log(elements)
let most = Math.max(...Object.values(elements));
let least = Math.min(...Object.values(elements));

console.log(most - least);





//Part 2
polymerTemplate = template.slice();

let combinations = {};
for (let k = 0; k < polymerTemplate.length - 1; k++) {
    let newPair = polymerTemplate.substring(k, k + 2);
    if (newPair in combinations) {
        combinations[newPair] += 1;
    } else {
        combinations[newPair] = 1;
    }
}
// console.log(combinations);

elements = {};
for (item of polymerTemplate) {
    if (item in elements) {
        elements[item] += 1;
    } else {
        elements[item] = 1;
    }
}
console.log(elements);


for (let i = 0; i < 40; i++) {
    let newCombinations = {};
    for (let item in combinations) {
        let foundElement = reactions[item];
        if (foundElement in elements) {
            elements[foundElement] += combinations[item]
        } else {
            elements[foundElement] = combinations[item];
        }
        let pair1 = item[0] + foundElement;
        let pair2 = foundElement + item[1];
        if (pair1 in newCombinations) {
            newCombinations[pair1] = newCombinations[pair1] + combinations[item];
        } else {
            newCombinations[pair1] = combinations[item];
        }
        if (pair2 in newCombinations) {
            newCombinations[pair2] = newCombinations[pair2] + combinations[item];
        } else {
            newCombinations[pair2] = combinations[item];
        }

    }
    combinations = Object.assign({}, newCombinations);
}
// console.log(combinations);

console.log(elements);

most = Math.max(...Object.values(elements));
least = Math.min(...Object.values(elements));

console.log(most - least);