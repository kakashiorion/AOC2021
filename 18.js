const input = [
    '[[[4,5],[[0,6],[4,5]]],[3,[[5,0],[0,8]]]]',
    '[[8,3],2]',
    '[[4,[7,[5,6]]],[[[7,8],5],[[7,0],1]]]',
    '[[[1,8],[7,6]],[[8,6],[3,2]]]',
    '[[[4,[2,0]],[1,[7,0]]],9]',
    '[2,[[[2,3],5],[6,5]]]',
    '[9,[1,[0,3]]]',
    '[5,[5,[8,[8,4]]]]',
    '[5,[1,[4,[0,8]]]]',
    '[1,[[[6,1],9],2]]',
    '[7,[[6,1],[[7,8],[4,2]]]]',
    '[[[[6,6],[3,3]],[6,[7,6]]],4]',
    '[[[3,[9,8]],[[6,6],[9,3]]],[[[9,2],3],[[7,6],0]]]',
    '[[[[5,2],6],[9,[1,7]]],[[9,9],[9,[4,3]]]]',
    '[[[7,6],[9,5]],[[[6,3],[8,4]],[[4,0],8]]]',
    '[[[0,[1,9]],[8,[4,4]]],1]',
    '[[1,[1,[9,4]]],[5,[[9,3],9]]]',
    '[[[1,3],[[2,3],9]],[7,9]]',
    '[[8,[[6,9],[5,9]]],[5,[5,[9,4]]]]',
    '[[[[3,7],[8,0]],[4,[8,9]]],[[[3,8],[3,5]],[9,0]]]',
    '[[[0,5],[5,1]],[3,[0,[0,5]]]]',
    '[7,[[4,[1,6]],0]]',
    '[[3,[4,4]],[[[0,5],9],[8,[9,5]]]]',
    '[[8,[5,2]],[[[7,4],[3,2]],4]]',
    '[[[[6,4],[7,9]],5],[3,[[4,3],[4,3]]]]',
    '[[[[7,0],6],[6,7]],[[[9,7],[3,7]],[[4,1],[0,6]]]]',
    '[[6,[[1,0],[1,7]]],[3,[3,0]]]',
    '[[[2,[6,0]],4],[[3,9],[4,1]]]',
    '[[[0,[8,4]],[[8,7],5]],[1,6]]',
    '[[[[4,0],7],9],[6,[8,[9,3]]]]',
    '[[[[0,8],7],[5,[4,0]]],[5,[6,[8,7]]]]',
    '[[[1,4],[[9,7],4]],[[4,[6,4]],1]]',
    '[[5,[[8,6],9]],1]',
    '[[[[5,7],[8,3]],[[3,2],[1,9]]],[2,[1,2]]]',
    '[[[9,6],[1,5]],[8,6]]',
    '[3,1]',
    '[[2,[[2,0],4]],[[[3,4],1],3]]',
    '[[[[8,6],[5,9]],7],2]',
    '[[[[1,0],[8,5]],[[6,5],[0,0]]],[[[3,4],[4,6]],[[5,0],8]]]',
    '[[[[6,4],[9,4]],[[2,1],[2,2]]],[[[7,9],1],[[6,1],5]]]',
    '[2,[[4,4],5]]',
    '[[[[0,8],9],[8,6]],[[[9,7],[0,8]],[[9,3],7]]]',
    '[[[[2,0],[7,8]],[[8,5],[6,8]]],[7,[[1,1],[2,3]]]]',
    '[[9,[5,[4,7]]],[0,[9,2]]]',
    '[5,[[[7,5],3],[6,[5,3]]]]',
    '[[1,[5,1]],[[[0,3],[3,9]],3]]',
    '[7,[[0,[0,1]],[1,2]]]',
    '[[4,[8,0]],[3,[[2,4],7]]]',
    '[8,[[1,[8,9]],[0,0]]]',
    '[0,[[2,9],[[9,7],[5,3]]]]',
    '[[[6,[3,4]],[[0,6],[4,3]]],9]',
    '[[[[0,6],6],6],[[7,8],[[7,3],[5,0]]]]',
    '[[[7,[4,5]],[9,2]],[6,[[5,5],[0,2]]]]',
    '[[[6,8],[5,[0,8]]],[[1,[6,6]],[0,6]]]',
    '[[[[4,7],7],[2,7]],[[8,0],[[6,5],[2,0]]]]',
    '[8,[[4,9],[[8,8],2]]]',
    '[2,[[4,[5,8]],[[8,7],[0,9]]]]',
    '[[[[2,8],0],6],[[[4,4],0],[1,3]]]',
    '[1,[[[8,5],1],8]]',
    '[[3,3],[[[5,6],[6,2]],5]]',
    '[[9,2],[3,[[3,2],4]]]',
    '[[[[2,4],[6,3]],[[4,6],4]],[[[1,9],[0,4]],[[2,6],[9,0]]]]',
    '[[[4,[6,7]],[[8,4],[6,2]]],[[5,2],[[4,8],0]]]',
    '[[[6,0],[[3,2],5]],[[[9,0],[7,0]],5]]',
    '[[2,[9,3]],[[4,[4,6]],[9,6]]]',
    '[[3,[3,6]],[[[2,4],1],[9,[7,7]]]]',
    '[4,[1,[[3,6],[4,1]]]]',
    '[[3,7],[[5,6],6]]',
    '[[[0,8],4],[[3,5],[[6,2],6]]]',
    '[[[6,[8,9]],[5,[2,4]]],[4,[3,4]]]',
    '[5,[[[6,8],[5,7]],[5,[9,9]]]]',
    '[[[[9,5],6],3],[[[8,2],4],[1,8]]]',
    '[[9,[9,3]],[[[5,7],0],[[5,4],[7,4]]]]',
    '[[[[7,7],7],6],9]',
    '[[9,8],[2,[7,7]]]',
    '[[[[5,9],6],[8,[9,2]]],[[[8,5],[9,5]],[3,[8,3]]]]',
    '[[[4,[3,8]],[8,[4,3]]],[[0,5],[5,[4,5]]]]',
    '[[[0,5],[[7,7],5]],[[[2,7],[6,0]],[[7,9],[2,2]]]]',
    '[6,[2,8]]',
    '[[[2,7],7],[[[8,4],[3,9]],1]]',
    '[[[2,0],[[0,5],[9,4]]],[[7,[6,2]],9]]',
    '[[1,[[8,3],[3,4]]],1]',
    '[[[[2,0],9],3],[1,[7,[2,1]]]]',
    '[4,[[6,[5,7]],[[1,1],[0,5]]]]',
    '[[[6,[0,7]],[4,[8,6]]],3]',
    '[[[8,5],6],[1,[[6,0],4]]]',
    '[[[[6,5],[5,6]],[[0,1],[2,7]]],[[7,[7,6]],[[3,2],[4,0]]]]',
    '[[[5,[0,0]],0],5]',
    '[[[[7,2],[5,9]],2],[3,7]]',
    '[7,[[[1,1],4],[[4,4],2]]]',
    '[9,[[[9,1],1],3]]',
    '[[[[6,9],[3,9]],[7,[1,5]]],[[[5,0],6],[[5,9],8]]]',
    '[[7,[1,[2,1]]],[7,[[6,3],[7,1]]]]',
    '[3,[0,[1,3]]]',
    '[9,[[[6,6],6],[6,4]]]',
    '[[[2,[0,4]],1],[[9,[5,1]],[[9,6],[5,2]]]]',
    '[[[9,8],6],[0,[6,[0,5]]]]',
    '[[[7,3],[[9,9],0]],7]',
    '[[[7,5],[6,8]],[6,[[0,8],9]]]',
    '[[[2,[0,5]],[[2,9],[5,7]]],7]'];

let problems = input.slice();

//Part 1
function reduceNumber(x) {

    let nested = 0;
    let containsGreaterThan10 = false;
    let isNested = false;
    do {
        nested = 0;
        containsGreaterThan10 = false;
        isNested = false;
        let explodeIndex = -1;
        let splitIndex = -1;
        for (let i = 0; i < x.length; i++) {
            if (x[i] == '[') {
                nested += 1
            } else if (x[i] == ']') {
                nested -= 1
            }
            if (!isNested && nested > 4) {
                isNested = true;
                explodeIndex = i;
            }
            if (!containsGreaterThan10 &&
                x[i] != '[' && x[i + 1] != '[' &&
                x[i] != ']' && x[i + 1] != ']' &&
                x[i] != ',' && x[i + 1] != ',') {
                containsGreaterThan10 = true;
                splitIndex = i;
            }
        }
        if (isNested) {
            x = explodePair(x, explodeIndex);
        } else if (containsGreaterThan10) {
            x = splitPair(x, splitIndex);
        }
    } while (isNested || containsGreaterThan10)
    return x;
}

function explodePair(x, i) {

    let j = i;
    let firstNumber;
    let secondNumber;
    let tempNumber = ''

    //Explode pair and replace with 0
    do {
        if (x[j] != '[' && x[j] != ']' && x[j] != ',') {
            tempNumber += x[j];
        } else if (x[j] == ',') {
            firstNumber = parseInt(tempNumber);
            tempNumber = '';
        } else if (x[j] == ']') {
            secondNumber = parseInt(tempNumber);
        }
        j += 1;
    } while (x[j - 1] != ']')
    x = x.substring(0, i) + '0' + x.substring(j,);

    //Add 2nd number right
    let nextNumber = 0;
    let nextNumberPosition = -1;
    tempNumber = '';
    for (let k = i + 1; k < x.length; k++) {
        if (x[k] != '[' && x[k] != ']' && x[k] != ',') {
            tempNumber += x[k];
            nextNumberPosition = k;
        } else {
            if (tempNumber.length > 0) {
                nextNumber = parseInt(tempNumber);
                break;
            }
        }
    }
    if (nextNumberPosition >= 0) {
        let newNext = nextNumber + secondNumber;
        if (nextNumber < 10) {
            x = x.substring(0, nextNumberPosition) + newNext.toString() + x.substring(nextNumberPosition + 1,)
        } else if (nextNumber < 100) {
            x = x.substring(0, nextNumberPosition - 1) + newNext.toString() + x.substring(nextNumberPosition + 1,)
        } else if (nextNumber < 1000) {
            x = x.substring(0, nextNumberPosition - 2) + newNext.toString() + x.substring(nextNumberPosition + 1,)
        } else {
            x = x.substring(0, nextNumberPosition - 3) + newNext.toString() + x.substring(nextNumberPosition + 1,)
        }
    }

    //Add 1st number left
    let previousNumber = 0;
    let previousNumberPosition = -1;
    tempNumber = '';
    for (let k = 0; k < i; k++) {
        if (x[k] != '[' && x[k] != ']' && x[k] != ',') {
            tempNumber += x[k];
            previousNumberPosition = k;
        } else {
            if (tempNumber.length > 0) {
                previousNumber = parseInt(tempNumber);
                tempNumber = '';
            }
        }
    }
    if (previousNumberPosition >= 0) {
        let newPrevious = previousNumber + firstNumber;
        // console.log({ previousNumber, previousNumberPosition, newPrevious })
        if (previousNumber < 10) {
            x = x.substring(0, previousNumberPosition) + newPrevious.toString() + x.substring(previousNumberPosition + 1,)
        } else if (previousNumber < 100) {
            x = x.substring(0, previousNumberPosition - 1) + newPrevious.toString() + x.substring(previousNumberPosition + 1,)
        } else if (previousNumber < 1000) {
            x = x.substring(0, previousNumberPosition - 2) + newPrevious.toString() + x.substring(previousNumberPosition + 1,)
        } else {
            x = x.substring(0, previousNumberPosition - 3) + newPrevious.toString() + x.substring(previousNumberPosition + 1,)
        }
    }

    return x;
}

function splitPair(x, i) {

    let j = i;
    let tempNumber = '';
    while ((x[j] != '[' && x[j] != ']' && x[j] != ',')) {
        tempNumber += x[j];
        j += 1;
    }
    let origNumber = parseInt(tempNumber);
    let firstNumber = Math.floor(origNumber / 2);
    let secondNumber = Math.ceil(origNumber / 2);

    x = x.substring(0, i) + '[' + firstNumber.toString() + ',' + secondNumber.toString() + ']' + x.substring(j,)

    return x;
}

function addNumbers(numberList) {
    let num1 = numberList[0];
    for (let m = 1; m < numberList.length; m++) {
        let num2 = numberList[m];
        let newNumber = '[' + num1.toString() + ',' + num2.toString() + ']';
        num1 = reduceNumber(newNumber);
    }
    return num1;
}

function calcMagnitude(x) {
    let tempNumber = '';
    let numbersStack = [];
    for (let i = 0; i < x.length; i++) {

        if (x[i] != '[' && x[i] != ',' && x[i] != ']') {
            tempNumber += x[i];
        } else {
            if (tempNumber.length > 0) {
                numbersStack.push(tempNumber);
                tempNumber = '';
            }
        }
        if (x[i] == ']') {
            let num2 = parseInt(numbersStack.pop());
            let num1 = parseInt(numbersStack.pop());
            let newNum = (num1 * 3) + (num2 * 2);
            numbersStack.push(newNum.toString());
        }
    }
    // console.log(numbersStack);
    return parseInt(numbersStack[0]);
}

let test2 = [
    '[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]',
    '[[[5,[2,8]],4],[5,[[9,9],0]]]',
    '[6,[[[6,2],[5,6]],[[7,6],[4,7]]]]',
    '[[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]',
    '[[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]',
    '[[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]',
    '[[[[5,4],[7,7]],8],[[8,3],8]]',
    '[[9,3],[[9,9],[6,[4,9]]]]',
    '[[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]',
    '[[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]'

];


let result = addNumbers(problems);
console.log(result);
let magnitude = calcMagnitude(result);
console.log(magnitude);


//Part 2
function findMaxMagnitude(numberList) {
    let allMag = [];
    for (let firstIndex = 0; firstIndex < numberList.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < numberList.length; secondIndex++) {
            let newNumber1 = '[' + numberList[firstIndex].toString() + ',' + numberList[secondIndex].toString() + ']';
            let newNumber2 = '[' + numberList[secondIndex].toString() + ',' + numberList[firstIndex].toString() + ']';
            let mag1 = calcMagnitude(reduceNumber(newNumber1));
            // console.log(mag1);
            let mag2 = calcMagnitude(reduceNumber(newNumber2))
            // console.log(mag2);
            allMag.push(mag1);
            allMag.push(mag2);
        }
    }
    return Math.max(...allMag);
}
console.log(findMaxMagnitude(problems));
