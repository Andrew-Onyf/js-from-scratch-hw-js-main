// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

const num1 = -2
const num2 = -5
const num3 = -11


function findLargest(number1, number2, number3) {
    let biger = 0

    if (number1 > number2 && number2 > number3) {
        biger = biger + number1
    } else if (number2 > number3 && number3 > number1) {
        biger = biger + number2
    } else {
        biger = biger + number3
    }

    return biger
}

let bigestNumber = findLargest(num1, num2, num3)
console.log(`Наибольшее число ${bigestNumber}`)

