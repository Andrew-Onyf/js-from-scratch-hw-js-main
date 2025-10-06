// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

const num1 = 3
const num2 = 1
const num3 = 2


function findLargest(number1, number2, number3) {
    let biger = 0;
    if (number1 >= number2) {
        if (number1 >= number3) {
            biger = number1;
        } else {
            biger = number3;
        }
    } else { // num2 > num1
        if (number2 >= number3) {
            biger = number2;
        } else {
            biger = number3;
        }
    }
    return biger
}

let bigestNumber = findLargest(num1, num2, num3)
console.log(`Наибольшее число ${bigestNumber}`)

