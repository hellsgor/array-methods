const obj = {};
const arr = [];

console.log('typeof obj: ', typeof obj); //object
console.log('typeof arr: ', typeof arr); //object

// как узнать что это массив?

// isArray
// возвращает true если в переменной массив
console.log('obj: ', Array.isArray(obj));
console.log('arr: ', Array.isArray(arr));
