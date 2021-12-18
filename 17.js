const destination = 'target area: x=277..318, y=-92..-53';

const destCoords = destination.substring(13,).split(", ");
const destX = destCoords[0].substring(2,).split("..");
const destY = destCoords[1].substring(2,).split("..");
const xStart = parseInt(destX[0]);
const xEnd = parseInt(destX[1]);
const yStart = parseInt(destY[0]);
const yEnd = parseInt(destY[1]);
const source = [0, 0];

let destPositions = [];
for (let i = xStart; i <= xEnd; xStart > xEnd ? i-- : i++) {
    for (let j = yStart; j <= yEnd; yStart > yEnd ? j-- : j++) {
        destPositions.push([i, j]);
    }
}
// console.log(destPositions);

//Part 1
function calcXGrad(xVel) {
    if (xVel > 0) {
        return -1
    } else if (xVel < 0) {
        return 1
    } else {
        return 0
    }
}

function isPositionInDestination(pos) {
    for (item of destPositions) {
        if (pos.toString() == item.toString()) {
            return true
        }
    }
    return false;
}

function getTrajectories(minX, maxX, minY, maxY) {
    let possibleVelocities = {};
    for (let j = minY; j <= maxY; j++) {
        const initialYVelocity = j;
        for (let i = minX; i <= maxX; i++) {
            const initialXVelocity = i;
            let xVelocity = initialXVelocity;
            let yVelocity = initialYVelocity;
            let currentPosition = source;
            let currentXPos = currentPosition[0];
            let currentYpos = currentPosition[1];
            let steps = 0;
            let highestY = 0;
            while (currentYpos >= yStart && currentXPos <= xEnd) {
                if (yVelocity == 0) {
                    highestY = currentYpos;
                }
                let nextPosition = [currentXPos + xVelocity, currentYpos + yVelocity];
                xVelocity = xVelocity + calcXGrad(xVelocity);
                yVelocity = yVelocity - 1;
                currentPosition = nextPosition.slice();
                currentXPos = currentPosition[0];
                currentYpos = currentPosition[1];
                steps += 1;
                if (isPositionInDestination(currentPosition)) {
                    possibleVelocities[[initialXVelocity, initialYVelocity]] = [steps, highestY];
                    break;
                }
            }
        }
    }
    return possibleVelocities;
}


//Part 2

let answer1 = getTrajectories(Math.round(Math.sqrt(xStart)), xEnd, yStart, (0 - yStart))
let heights = [];
for (item of Object.values(answer1)) {
    heights.push(item[1])
}
//Answer 1
console.log(Math.max(...heights));
//Answer 2
console.log(Object.values(answer1).length);

