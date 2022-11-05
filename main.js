//Exercise 1

const array = [1, 2, 3, 4, 5, 6]

function sumEvens(arr) {
    let sumResult = []
    arr.forEach(e => {

    });
}
sumEvens(array)

//Exercise 2

function listNum(num) {
    for (let i = 0; i < num + 1; i++) {
        console.log(i);
    }
}
listNum(12)

//exercise 3

function listNumdec(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
listNumdec(12)

//exercise 4

function listEvens(num) {
    for (let i = 1; i < num + 1; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

listEvens(8)

//exercise 5

function multTable(num) {
    let result
    for (let i = 0; i < 11; i++) {
        result = i * num
        console.log(`${i} x ${num} = ${result}`);
    }
    return
}
multTable(7)

//exercise 6 

function multiThree(num) {
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

multiThree(10)

//exercise 7

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function DNI(numDNI, Letter) {
    if (numDNI < 0 || numDNI > 99999999) {
        return console.log('the number is not valid');
    } else {
        calculateLetter = letras[numDNI % 23]
        if (calculateLetter != Letter) {
            return console.log('The letter is not valid');
        }else{
            console.log('The number and letter are correct');
        }
    }
    return
}

DNI(53473698, 'D')