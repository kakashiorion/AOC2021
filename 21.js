const input = [
    'Player 1 starting position: 8',
    'Player 2 starting position: 10'];

const p1StartPos = parseInt(input[0].split(": ")[1]);
const p2StartPos = parseInt(input[1].split(": ")[1]);

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


//Part 2 
let wins = [0, 0];
playRound(wins, 1, 0, 8, 0, 10, 1);
console.log({ wins });

function calcPosition(origValue, increment) {
    if (origValue + increment > 10) {
        return origValue + increment - 10;
    }
    else {
        return origValue + increment;
    }
}

function playRound(winsArray, currentPlayer, p1score, p1position, p2score, p2position, factor) {

    if (currentPlayer == 1) {
        let pos1 = calcPosition(p1position, 3);
        let pos2 = calcPosition(p1position, 4);
        let pos3 = calcPosition(p1position, 5);
        let pos4 = calcPosition(p1position, 6);
        let pos5 = calcPosition(p1position, 7);
        let pos6 = calcPosition(p1position, 8);
        let pos7 = calcPosition(p1position, 9);
        currentPlayer = 2;
        let score1 = p1score + pos1;
        if (score1 > 20) {
            winsArray[0] += 1 * factor;
        } else {
            playRound(winsArray, currentPlayer, score1, pos1, p2score, p2position, factor * 1);
        }
        let score2 = p1score + pos2;
        if (score2 > 20) {
            winsArray[0] += 3 * factor;
        } else {
            playRound(winsArray, currentPlayer, score2, pos2, p2score, p2position, factor * 3);
        }
        let score3 = p1score + pos3;
        if (score3 > 20) {
            winsArray[0] += 6 * factor;
        } else {
            playRound(winsArray, currentPlayer, score3, pos3, p2score, p2position, factor * 6);
        }
        let score4 = p1score + pos4;
        if (score4 > 20) {
            winsArray[0] += 7 * factor;
        } else {
            playRound(winsArray, currentPlayer, score4, pos4, p2score, p2position, factor * 7);
        }
        let score5 = p1score + pos5;
        if (score5 > 20) {
            winsArray[0] += 6 * factor;
        } else {
            playRound(winsArray, currentPlayer, score5, pos5, p2score, p2position, factor * 6);
        }
        let score6 = p1score + pos6;
        if (score6 > 20) {
            winsArray[0] += 3 * factor;
        } else {
            playRound(winsArray, currentPlayer, score6, pos6, p2score, p2position, factor * 3);
        }
        let score7 = p1score + pos7;
        if (score7 > 20) {
            winsArray[0] += 1 * factor;
        } else {
            playRound(winsArray, currentPlayer, score7, pos7, p2score, p2position, factor * 1);
        }
    } else {
        let pos1 = calcPosition(p2position, 3);
        let pos2 = calcPosition(p2position, 4);
        let pos3 = calcPosition(p2position, 5);
        let pos4 = calcPosition(p2position, 6);
        let pos5 = calcPosition(p2position, 7);
        let pos6 = calcPosition(p2position, 8);
        let pos7 = calcPosition(p2position, 9);
        currentPlayer = 1;
        let score1 = p2score + pos1;
        if (score1 > 20) {
            winsArray[1] += 1 * factor;
        } else {
            playRound(winsArray, currentPlayer, p1score, p1position, score1, pos1, factor * 1);
        }
        let score2 = p2score + pos2;
        if (score2 > 20) {
            winsArray[1] += 3 * factor;
        } else {
            playRound(winsArray, currentPlayer, p1score, p1position, score2, pos2, factor * 3);
        }
        let score3 = p2score + pos3;
        if (score3 > 20) {
            winsArray[1] += 6 * factor;
        } else {
            playRound(winsArray, currentPlayer, p1score, p1position, score3, pos3, factor * 6);
        }
        let score4 = p2score + pos4;
        if (score4 > 20) {
            winsArray[1] += 7 * factor;
        } else {
            playRound(winsArray, currentPlayer, p1score, p1position, score4, pos4, factor * 7);
        }
        let score5 = p2score + pos5;
        if (score5 > 20) {
            winsArray[1] += 6 * factor;
        } else {
            playRound(winsArray, currentPlayer, p1score, p1position, score5, pos5, factor * 6);
        }
        let score6 = p2score + pos6;
        if (score6 > 20) {
            winsArray[1] += 3 * factor;
        } else {
            playRound(winsArray, currentPlayer, p1score, p1position, score6, pos6, factor * 3);
        }
        let score7 = p2score + pos7;
        if (score7 > 20) {
            winsArray[1] += 1 * factor;
        } else {
            playRound(winsArray, currentPlayer, p1score, p1position, score7, pos7, factor * 1);
        }
    }
}

