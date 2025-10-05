// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let num1 = 1
let num2 = 5
let num3 = 3

let biger = 0

function findLargest(number1, number2, number3) {
    if (number1 > number2) {
        biger += number1
    } else if (number2 > number3) {
        biger += number2
    } else {
        biger += number3
    }
    return biger
}
let x = findLargest(num1, num2, num3)
console.log(`Наибольшее число ${x}`)

