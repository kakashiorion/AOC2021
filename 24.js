// 14, 12
// 15, 7
// 12, 1
// 11, 2
//     - 5, 4
// 14, 15
// 15, 11
//     - 13, 5
//     - 16, 3
//     - 8, 9
// 15, 2
//     - 8, 3
// 0, 3
//     - 4, 11
// POP.Must have input[4] == PUSH input[3] - 3
// POP.Must have input[7] == PUSH input[6] - 2
// POP.Must have input[8] == PUSH input[5] - 1
// POP.Must have input[9] == PUSH input[2] - 7
// POP.Must have input[11] == PUSH input[10] - 6
// POP.Must have input[12] == PUSH input[1] + 7
// POP.Must have input[13] == PUSH input[0] + 8
// 12996997829399
// 11841231117189

const monad = [
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 14',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 12',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 15',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 7',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 12',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 1',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 11',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 2',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -5',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 4',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 14',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 15',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 15',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 11',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -13',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 5',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -16',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 3',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -8',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 9',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 1',
    'add x 15',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 2',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -8',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 3',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x 0',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 3',
    'mul y x',
    'add z y',
    'inp w',
    'mul x 0',
    'add x z',
    'mod x 26',
    'div z 26',
    'add x -4',
    'eql x w',
    'eql x 0',
    'mul y 0',
    'add y 25',
    'mul y x',
    'add y 1',
    'mul z y',
    'mul y 0',
    'add y w',
    'add y 11',
    'mul y x',
    'add z y'];

function evaluateModelNumber(modelNumber) {

    let index = 0;
    let w = 0;
    let x = 0;
    let y = 0;
    let z = 0;

    for (item of monad) {
        let instructionArray = item.split(' ');
        let operation = instructionArray[0];
        let operand1 = instructionArray[1];
        let currentvariable;

        if (operation == 'inp') {
            // console.log({ w, x, y, z });
            //Input operand to variable
            currentvariable = parseInt(modelNumber[index]);
            index += 1;
            if (operand1 == 'w') {
                w = currentvariable;
            } else if (operand1 == 'x') {
                x = currentvariable;
            } else if (operand1 == 'y') {
                y = currentvariable;
            } else if (operand1 == 'z') {
                z = currentvariable;
            }
        } else {
            //Get 1st operand
            if (operand1 == 'w') {
                currentvariable = w;
            } else if (operand1 == 'x') {
                currentvariable = x;
            } else if (operand1 == 'y') {
                currentvariable = y;
            } else if (operand1 == 'z') {
                currentvariable = z;
            }
            //Get 2nd operand
            let operand2 = instructionArray[2];
            if (operand2 == 'w') {
                operand2 = w;
            } else if (operand2 == 'x') {
                operand2 = x;
            } else if (operand2 == 'y') {
                operand2 = y;
            } else if (operand2 == 'z') {
                operand2 = z;
            } else {
                operand2 = parseInt(operand2);
            }
            //Compute
            if (operation == 'add') {
                currentvariable += operand2;
            } else if (operation == 'mul') {
                currentvariable *= operand2;
            } else if (operation == 'div') {
                currentvariable = Math.trunc(currentvariable / operand2);
            } else if (operation == 'mod') {
                currentvariable = currentvariable % operand2;
            } else if (operation == 'eql') {
                currentvariable = currentvariable == operand2 ? 1 : 0;
            }
            //Put back in variable
            if (operand1 == 'w') {
                w = currentvariable;
            } else if (operand1 == 'x') {
                x = currentvariable;
            } else if (operand1 == 'y') {
                y = currentvariable;
            } else if (operand1 == 'z') {
                z = currentvariable;
            }
        }
    }
    // console.log({ modelNumber, w, x, y, z });
    if (z == 0) {
        return true;
    } else {
        return false;
    }
}

//Part 1
let k = 12999999999999;
let modelNumberFound = false;
while (!modelNumberFound) {
    k -= 1;
    if (k.toString().includes('0')) {
        continue;
    } else {
        // console.log(k + ' not found');
        modelNumberFound = evaluateModelNumber(k.toString());
    }
}
console.log('largest ' + k);


//Part 2
k = 11111111111111;
modelNumberFound = false;
while (!modelNumberFound) {
    k += 1;
    if (k.toString().includes('0')) {
        continue;
    } else {
        // console.log(k + ' not found');
        modelNumberFound = evaluateModelNumber(k.toString());
    }
}
console.log('smallest ' + k);