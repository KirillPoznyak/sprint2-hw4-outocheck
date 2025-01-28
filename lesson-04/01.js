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

const myArray = [1, 2, 3];
const myArraysElement = 1;
let isIncludes = includesElement(myArray, myArraysElement);
console.log(`Is in array: ${isIncludes}`);