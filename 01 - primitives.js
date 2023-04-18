const array = [1, 2, 3, 5, 8];
console.log('basic: ', array);


// push - добавляет элемент (элементы) в конец массива
array.push(13);
console.log('push 13: ', array);

// unshift - добавляет элемент (элементы) в начало массива
array.unshift(99);
console.log('unshift 0: ', array);

// shift - удаляет первый элемент массива
array.shift();
console.log('shift: ', array);

// pop - удаляет последний элемент массива и возвращает его
array.pop();
console.log('pop', array);
