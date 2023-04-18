// map
// вызывает функцию для каждого элемента массива
// возвращает массив результатов выполнения этой функции

const array = ['John', 'Sam', 'Pete', 'Alex', 'Bob'];
const result = array.map(function(item, index, array) {
  return `${item[0].toLowerCase()} - ${item.slice(1, item.length)}`;
});
console.log(array)
console.log('result: ', result);
