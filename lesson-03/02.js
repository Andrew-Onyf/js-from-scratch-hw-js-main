// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(n) {
    // if (n % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return n % 2 === 0 ? true : false;
}

const number = isEven(3)
console.log(`Четное число = ${number}`)