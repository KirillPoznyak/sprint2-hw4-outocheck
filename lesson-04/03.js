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

function findCommonElements(array1, array2) {
    let commonArray = [];
    for (let i = 0; i < array2.length; i++) {
        if (includesElement(array1, array2[i])){
            commonArray.push(array2[i]);
        }
    }
    return commonArray;
}

const myArray1 = [1,2,3,4];
const myArray2 = [2,3,4,5];
let myCommonArray = findCommonElements(myArray1, myArray2);
console.log(`${myCommonArray}`);