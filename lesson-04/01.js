/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

// function includesElement() {}
// const array = []

function includesElement(arr, searchElement) {
    let boolian = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            boolian = true;
        }
    }
    return boolian;
}

const array = [2, 4, 6]
const element = 1;

const findElement = includesElement(array, element);
console.log(findElement);