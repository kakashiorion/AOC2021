const input = [
    'Player 1 starting position: 8',
    'Player 2 starting position: 10'];

const p1StartPos = parseInt(input[0].split(": ")[1]);
const p2StartPos = parseInt(input[1].split(": ")[1]);
// console.log({ p1StartPos, p2StartPos })

function Player(name, initialPos) {
    this.name = name;
    this.pos = initialPos;
    this.score = 0;
    this.incrementScore = (val) => {
        this.score += val;
        if (this.score >= 1000) {
            console.log(this.name + ' won!');
        }
    }
    this.incrementPosition = (val) => {
        this.pos = this.pos + val;
        while (this.pos > 10) {
            this.pos -= 10;
        }
    }
    this.getScore = () => { return this.score; }
    this.getPosition = () => { return this.pos; }
    this.getName = () => { return this.name; }
}

function Die(initialValue) {
    this.value = initialValue;
    this.numberRolls = 0;
    this.rollDie = () => {
        this.value += 1;
        this.numberRolls += 1;
        if (this.value > 100) {
            this.value -= 100;
        }
    }
    this.getDieValue = () => { return this.value; }
    this.getNumberRolls = () => { return this.numberRolls; }
}


//Part 1
let player1 = new Player('Player 1', p1StartPos);
let player2 = new Player('Player 2', p2StartPos);
let die = new Die(0);

let currentPlayer = player1;
while (player1.getScore() < 1000 && player2.getScore() < 1000) {
    die.rollDie();
    let r1 = die.getDieValue();
    die.rollDie();
    let r2 = die.getDieValue();
    die.rollDie();
    let r3 = die.getDieValue();
    currentPlayer.incrementPosition(r1 + r2 + r3);
    currentPlayer.incrementScore(currentPlayer.getPosition());
    currentPlayer = currentPlayer == player1 ? player2 : player1;
}

let answer = currentPlayer.getScore() * die.getNumberRolls();
console.log(answer);


//Part 2 - Incomplete

const dieOccurences = {
    3: 1, 4: 3, 5: 6, 6: 7, 7: 6, 8: 3, 9: 1
}

let player1Positions = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 1,
    9: 0,
    10: 0,
}

let player2Positions = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 1,
}

let p1Wins = 0;
let p2Wins = 0;
playRound(1, 0, 8, 0, 10, 1, 0, 0);
playRound(1, 0, 8, 0, 10, 2, 0, 0);
playRound(1, 0, 8, 0, 10, 3, 0, 0);
console.log({ p1Wins, p2Wins });

function playRound(currentPlayer, p1score, p1position, p2score, p2position, dieValue, numRolls, dieTotal) {

    numRolls += 1;
    dieTotal += dieValue;
    if (numRolls < 3) {
        playRound(currentPlayer, p1score, p1position, p2score, p2position, 1, numRolls, dieTotal);
        playRound(currentPlayer, p1score, p1position, p2score, p2position, 2, numRolls, dieTotal);
        playRound(currentPlayer, p1score, p1position, p2score, p2position, 3, numRolls, dieTotal);
    } else {
        if (currentPlayer == 1) {
            p1position += dieTotal;
            if (p1position > 10) {
                p1position -= 10;
            }
            p1score += p1position;
            if (p1score < 21) {
                currentPlayer = 2;
                playRound(currentPlayer, p1score, p1position, p2score, p2position, 1, 0, 0);
                playRound(currentPlayer, p1score, p1position, p2score, p2position, 2, 0, 0);
                playRound(currentPlayer, p1score, p1position, p2score, p2position, 3, 0, 0);
            } else {
                p1Wins += 1;
                console.log({ p1Wins, p2Wins });
            }
        } else {
            p2position += dieTotal;
            if (p2position > 10) {
                p2position -= 10;
            }
            p2score += p2position;
            if (p2score < 21) {
                currentPlayer = 1;
                playRound(currentPlayer, p1score, p1position, p2score, p2position, 1, 0, 0);
                playRound(currentPlayer, p1score, p1position, p2score, p2position, 2, 0, 0);
                playRound(currentPlayer, p1score, p1position, p2score, p2position, 3, 0, 0);
            } else {
                p2Wins += 1;
                console.log({ p1Wins, p2Wins });
            }
        }
    }
}