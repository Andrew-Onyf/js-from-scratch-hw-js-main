// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

// let num1 = -1
// let num2 = -2
// let num3 = -3


function findLargest(number1, number2, number3) {
    let biger = 0

    if (number1 > number2) {
        biger = number1
    } else if (number2 > number3) {
        biger = number2
    } else {
        biger = number3
    }
    return biger
}
let x = findLargest(1, 3, 5)
console.log(`Наибольшее число ${x}`)

