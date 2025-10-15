/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const array1 = [1, 2, 3]
const array2 = [6, 1, 3]

function findCommonElements(arr1, arr2) {
    const common = []

    for (let i = 0; i < arr1.length; i++) {
        let arr = true
        for (let j = 0; j < arr2.length; j++) {
            if (array[i] === array[j]) {
                arr = false

            }
        }
        if (arr) {
            common.push(array[i])
        }
    }


    return common
}

const generalArray = findCommonElements(array1, array2)
console.log(generalArray)
