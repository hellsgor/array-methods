const array = [
  {name: 'Bob', age: 101},
  {name: 'Sam', age: 25},
  {name: 'Alex', age: 89},
  {name: 'Pete', age: 50},
  {name: 'John', age: 18}
];

// filter
// очень похож на метод find, но не прекращает свою работу после первого соответствия условию
// перебирает массив до конца
// находит все элементы на которых функция-callback вернёт true

const result = array.filter((item, index, array) => item.age <= 50);
console.log(result);
