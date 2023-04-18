const array = [
  {name: 'John', age: 18},
  {name: 'Sam', age: 25},
  {name: 'Pete', age: 50},
  {name: 'Alex', age: 89},
  {name: 'Bob', age: 101}
];

// find
// поиск элемента в массиве с определённым условием
// возвращает первый, соответствующий условию, элемент массива
const result1 = array.
  find((item, index, array) =>
  item.age === 89);
console.log(result1);

// findIndex
// поиск индекса элемента массива соответствующего условию
// возвращает индекс элемента соответствующего условию

const result2 = array.
  findIndex((item, index, array) =>
  item.age === 50);
console.log(result2);
