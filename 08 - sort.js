// sort
// метод сортировки массивов
// сортирует массив на месте, меняя в нём порядок элементов

// сортировка строк
const array1 = ['John', 'Sam', 'Pete', 'Alex', 'Bob'];
array1.sort();
console.log('array1: ', array1); // [ 'Alex', 'Bob', 'John', 'Pete', 'Sam' ]

// сортировка чисел
const array2 = [45, 1, 32, 99, 8, 0, 102, 15];
array2.sort();
console.log('array2: ', array2); // [0,  1, 102, 15, 32, 45,   8, 99]
// результат такой потому что
// по умолчанию sort сортирует всё как строки,
// а если 102 и 15 строки, то действительно '102' меньше '15'
console.log('102' < '15');    // true
console.log(102 < 15);        // false

// правильная сортировка чисел
// реализовывается с помощью функции, которая должна являться аргументом sort

// подробный вариант записи такой функции
function customNumsSort_1(a, b) {
  console.log(`Сравниваю ${a} и ${b}`);
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}
const array3 = [45, 1, 32, 99, 8, 0, 102, 15];
array3.sort(customNumsSort_1);
console.log('array3: ', array3); // [0,  1,  8,  15, 32, 45, 99, 102];

// простой вариант записи такой функции
function customNumsSort_2(a, b) {
  return a - b;
}
const array4 = [45, 1, 32, 99, 8, 0, 102, 15];
array4.sort(customNumsSort_2);
console.log('array4: ', array4); // [0,  1,  8,  15, 32, 45, 99, 102];

// запись callback-функции для метода sort с =>
const array5 = [45, 1, 32, 99, 8, 0, 102, 15];
array5.sort((a, b) => a - b);
console.log('array5', array5); // [0,  1,  8,  15, 32, 45, 99, 102];

// сортировка смешанного массива
const array6 = ['John', '45', '0', 'Sam', '1', '102', 'Pete', '32', '15', 'Alex', '99', '15', 'Bob', '8'];
array6.sort();
console.log('array6', array6);
// ['0', '1', '102', '15', '15', '32', '45', '8', '99', 'Alex', 'Bob', 'John', 'Pete', 'Sam']

const array7 = ['John', '45', '0', 'Sam', '1', '102', 'Pete', '32', '15', 'Alex', '99', '15', 'Bob', '8'];
array7.sort((a, b) => a - b);
console.log('array7', array7);
// ['John', '0', '1', '8', '15', '15', '32', '45', 'Sam', '102', 'Pete', 'Alex', '99', 'Bob']
