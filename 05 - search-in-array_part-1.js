const array = ['John', 'Sam', 'Pete', 'Alex', 'Bob'];

// indexOf
// arr.indexOf(item, from)
// ищет item начиная с from и возвращает индекс на котором был найден искомый элемент, в противном случае вернёт -1
console.log(array.indexOf('Sam'));      // 1
console.log(array.indexOf('Bob', 3));   // 4
console.log(array.indexOf('Иван'));     // -1

// lastIndexOf
// arr.lastIndexOf(item, from)
// тоже что indexOf, но поиск идёт от последнего элемента к первому
console.log(array.lastIndexOf('Sam'));      // 1
console.log(array.lastIndexOf('Bob', 4));   // 4
console.log(array.lastIndexOf('Иван'));     // -1

// includes
// arr.includes(item, from);
// ищет item начиная с from и возвращает true если поиск успешен
console.log(array.includes('Pete'));      // true
console.log(array.includes('Alex', 2));   // true
console.log(array.includes('Коля'));      // false

