/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(arr) {
    const uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
        let arr = true

        for (let j = 0; j < uniqueElements.length; j++) {
            if (array[i] === array[j]) {
                arr = false
            }
        }
        if (arr) {
            uniqueElements.push(array[i])
        }
    }


    return uniqueElements;
}

const array = [1, 2, 3, 2, 1, 4]
const unique = findUniqueElements(array)
console.log(unique)