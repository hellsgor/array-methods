const array = ['John', 'Sam', 'Pete', 'Alex', 'Bob'];

// forEach
// метод перебора массивов
// выполняет функцию для каждого элемента массива

array.forEach(function(item, index, array) {
  console.log(`Элемент ${item} имеет индекс ${index} и принадлежит массиву array: ${array}!`);
})
console.log('------------------------------');

// тоже самое, но используя =>
console.log('------------------------------');
array.forEach((item, index, array) => {
  console.log(`Элемент ${item} имеет индекс ${index} и принадлежит массиву array: ${array}!`);
})
