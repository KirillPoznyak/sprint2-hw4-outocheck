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

function includesElement(array, element) {
    let isInArray = false;
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            isInArray = true;
            break;
        }
    }
    return isInArray;
}

function findUniqueElements(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!includesElement(uniqueArray, array[i])){
            uniqueArray.push(array[i]);
        }
            // if (!uniqueArray.includes(array[i])) {
            //     uniqueArray.push(array[i]);
            // }
    }
    return uniqueArray;
}
const myArray = [1, 2, 3, 2, 1, 4, 5, 4];
let uniqueArray = findUniqueElements(myArray);
console.log(`${uniqueArray}`);

// function findUniqueElements(array) {
//     let uniqueArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let double = false;
//         let arrayElement = array[i];
//         for (let d = i+1; d < array.length; d++) {
//             if (arrayElement = array[d]) {
//                 array.splice(d, 1);
//                 double = true;
//             }
//         }
//         if (double) {
//             array.splice(i, 1);
//             i = -1;
//         }
//         uniqueArray.push(arrayElement);
//     }
//     return uniqueArray;
// }

