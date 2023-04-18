// slice
// Создаёт новый массив, в который копируется часть или весь массив
// Синтаксис arr.slice([start], [end]) не включая [end]

// копировать часть массива
const array1 = [1, 2, 3, 5, 8];

const newArray1 = array1.slice(2, 4);
console.log(newArray1);

const newArray2 = array1.slice(-3, -1);
console.log(newArray2);

// копировать весь массив
const newArray3 = array1.slice();
console.log(newArray3);
