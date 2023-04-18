const str = 'John,Sam,Pete,Alex,Bob';


// split
// преобразовывает строку в массив по заданному разделителю
// возвращает массив
const newArray1 = str.split(',');
console.log('newArray1: ', newArray1); // [ 'John', 'Sam', 'Pete', 'Alex', 'Bob' ]

// можно ограничить количество элементов в массиве
const newArray2 = str.split(',', 2);
console.log('newArray2: ', newArray2); // [ 'John', 'Sam' ]

// join
// преобразовывает массив в строку с заданным разделителем,
// то есть метод обратный методу split
// соответственно возвращает строку
const newStr = `${newArray1.join('; ')}.`;
console.log('newStr: ', newStr); // John, Sam, Pete, Alex, Bob.
