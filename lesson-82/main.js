function helloUser(user) {
    return `Hello ${user}`
} 

console.log(helloUser('Adam'))

console.log("----------///----------")

const numbers = [4, 54, 7, 15, 9, 14, 51]

function numberUpTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}

console.log(numberUpTen(numbers))

console.log("----------///----------")

let result = 0

function calculate(numberOne, numberTwo, symbol) {
    if (symbol == 'minus') {
        result = numberOne - numberTwo
    }
    else if (symbol == 'plus') {
        result = numberOne + numberTwo
    }
    else if (symbol == 'division') {
        result = numberOne / numberTwo
    }
    else if (symbol == 'multiplication') {
        result = numberOne * numberTwo
    }
    else {
        result = 'ERROR'
    }
    console.log(result)
}

console.log(calculate( 1, 2, 'minus'))