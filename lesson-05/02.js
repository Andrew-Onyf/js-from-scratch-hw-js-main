/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/


//
// const gallery = {
//     'Mona Lisa': 'Leonardo da Vinci',
//     'Starry Night': 'Vincent van Gogh',
//     'The Scream': 'Edvard Munch',
// }
//
// function updateGallery() {}

const gallery = {
    'Mona Lisa': 'Leonardo da Vinci',
    'Starry Night': 'Vincent van Gogh',
    'The Scream': 'Edvard Munch',
}

function updateGallery(object, title, newValue) {
    if (title in object) {
        object[title] = newValue
    } else {
        object[title] = newValue
    }
    return object
}

console.log(updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506'))
console.log(updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali'))