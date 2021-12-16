const message = 'A20D5CECBD6C061006E7801224AF251AEA06D2319904921880113A931A1402A9D83D43C9FFCC1E56FF29890E00C42984337BF22C502008C26982801009426937320124E602BC01192F4A74FD7B70692F4A74FD7B700403170400F7002DC00E7003C400B0023700082C601DF8C00D30038005AA0013F40044E7002D400D10030C008000574000AB958B4B8011074C0249769913893469A72200B42673F26A005567FCC13FE673004F003341006615421830200F4608E7142629294F92861A840118F1184C0129637C007C24B19AA2C96335400013B0C0198F716213180370AE39C7620043E0D4788B440232CB34D80260008645C86D16C401B85D0BA2D18025A00ACE7F275324137FD73428200ECDFBEFF2BDCDA70D5FE5339D95B3B6C98C1DA006772F9DC9025B057331BF7D8B65108018092599C669B4B201356763475D00480010E89709E090002130CA28C62300265C188034BA007CA58EA6FB4CDA12799FD8098021400F94A6F95E3ECC73A77359A4EFCB09CEF799A35280433D1BCCA666D5EFD6A5A389542A7DCCC010958D85EC0119EED04A73F69703669466A048C01E14FFEFD229ADD052466ED37BD8B4E1D10074B3FF8CF2BBE0094D56D7E38CADA0FA80123C8F75F9C764D29DA814E4693C4854C0118AD3C0A60144E364D944D02C99F4F82100607600AC8F6365C91EC6CBB3A072C404011CE8025221D2A0337158200C97001F6978A1CE4FFBE7C4A5050402E9ECEE709D3FE7296A894F4C6A75467EB8959F4C013815C00FACEF38A7297F42AD2600B7006A0200EC538D51500010B88919624CE694C0027B91951125AFF7B9B1682040253D006E8000844138F105C0010D84D1D2304B213007213900D95B73FE914CC9FCBFA9EEA81802FA0094A34CA3649F019800B48890C2382002E727DF7293C1B900A160008642B87312C0010F8DB08610080331720FC580';


// const message = '620080001611562C8802118E34';
// const message = 'C0015000016115A2E0802F182340';
// const message = '9C0141080250320F1802104A08';

const binaryKey = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111',
}

let msgInBinary = '';
for (char of message) {
    msgInBinary += binaryKey[char];
}

//Part 1
let versionList = [];

function extractPacket(x) {

    let version = x.substring(0, 3);
    let typeID = x.substring(3, 6);

    versionList.push(parseInt(version, 2));

    if (typeID == '100') {
        let literal = '';
        let i = 6;
        while (x[i] == '1') {
            literal += x.substring(i + 1, i + 5);
            i += 5;
        }
        literal += x.substring(i + 1, i + 5);
        return i + 5;
    }
    else {
        let opCode = x.substring(6, 7);

        if (opCode == '0') {
            let pSubLength = parseInt(x.substring(7, 22), 2);
            let subPackets = x.substring(22, 22 + pSubLength);
            let j = 0;
            while (j < pSubLength) {
                let subPacketLength = extractPacket(subPackets.substring(j,));
                console.log('subPacket length is ' + subPacketLength);
                j += subPacketLength;
            }
            return pSubLength + 22;
        } else {
            let numberSubPackets = parseInt(x.substring(7, 18), 2);
            let j = 18;
            for (let k = 0; k < numberSubPackets; k++) {
                let subPacketLength = extractPacket(x.substring(j,));
                j += subPacketLength;
            }
            return j;
        }
    }
}

// extractPacket(msgInBinary);
// console.log(Object.values(versionList).reduce((a, b) => a + b));





//Part 2
function extractPacket2(x) {

    let typeID = parseInt(x.substring(3, 6), 2);
    if (typeID == 4) {
        let literal = '';
        let i = 6;
        while (x[i] == '1') {
            literal += x.substring(i + 1, i + 5);
            i += 5;
        }
        literal += x.substring(i + 1, i + 5);
        return [i + 5, parseInt(literal, 2)];
    }
    else {
        let opCode = x.substring(6, 7);
        if (opCode == '0') {
            let pSubLength = parseInt(x.substring(7, 22), 2);
            let subPackets = x.substring(22, 22 + pSubLength);
            let j = 0;
            let answers = [];
            while (j < pSubLength) {
                let resultSet = extractPacket2(subPackets.substring(j,));
                let subPacketLength = resultSet[0];
                let answer = resultSet[1];
                answers.push(answer);
                j += subPacketLength;
            }
            return [pSubLength + 22, findResult(answers, typeID)];
        } else {
            let numberSubPackets = parseInt(x.substring(7, 18), 2);
            let j = 18;
            let answers = [];
            for (let k = 0; k < numberSubPackets; k++) {
                let resultSet = extractPacket2(x.substring(j,));
                let subPacketLength = resultSet[0];
                let answer = resultSet[1];
                answers.push(answer);
                j += subPacketLength;
            }
            return [j, findResult(answers, typeID)];
        }
    }
}

function findResult(listOfAnswers, opCode) {

    if (opCode == 0) {
        let sum = 0;
        for (item of listOfAnswers) {
            sum += item;
        }
        return sum;
    }
    else if (opCode == 1) {
        let product = 1;
        for (item of listOfAnswers) {
            product *= item;
        }
        return product;
    }
    else if (opCode == 2) {
        return Math.min(...listOfAnswers);
    }
    else if (opCode == 3) {
        return Math.max(...listOfAnswers);
    }
    else if (opCode == 5) {
        return (listOfAnswers[0] > listOfAnswers[1]) ? 1 : 0;
    }
    else if (opCode == 6) {
        return (listOfAnswers[0] < listOfAnswers[1]) ? 1 : 0;
    }
    else if (opCode == 7) {
        return (listOfAnswers[0] == listOfAnswers[1]) ? 1 : 0;
    }

}

let result = extractPacket2(msgInBinary);
console.log(result[1]);