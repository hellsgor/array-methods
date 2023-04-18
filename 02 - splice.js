// splice

// удалить элемент
const array1 = [1, 2, 3, 5, 8];
array1.splice(1, 2); // читается как удалить два элемента начиная с первого;
console.log(array1);

// удалить элемент и вернуть его в переменную
const array2 = [1, 2, 3, 5, 8];
let removedElem;
removedElem = array2.splice(2, 1);
console.log(removedElem);

// заменить элемент
const array3 = [1, 2, 3, 5, 8];
array3.splice(2, 1, 99);
console.log(array3);

// заменить один элемент на несколько;
array3.splice(2, 1, 999, 1000, 1001);
console.log(array3);
console.log(array3[3]);

// добавить элементы
const array4 = [1, 2, 3, 5, 8];
array4.splice(1, 0, 98, 99);
console.log(array4);

// удалить последний элемент
const array5 = [1, 2, 3, 5, 8];
array5.splice(-1, 1);
console.log(array5);


