// Если нужно перебрать массив можно использовать forEach / for-of
// Если нужно перебрать и преобразовать каждый элемент массива - map

// reduce и reduceRight похожи на эти методы,
// но они используются для вычисления единого значения на основе всего массива

//reduce

// let value = arr.reduce(function(previousValue, item, index, array) {
//   -...-
// }, [initial]);
//, где:

// - previousValue - результат предыдущего вызова этой функции,
// который равен initial (если он передан) при первом вызове;

const array = [1, 2, 3, 4];

const reducedValue1 = array.reduce(function(previousValue, item) {
  return item + previousValue;
}, 0);
console.log('reducedValue1: ', reducedValue1);


// если не указать значение initial, то оно будет равно значению первого элемента массива,
// а работа метода начнётся со второго элемента

const reducedValue2 = array.reduce(function(previousValue, item) {
  return item + previousValue;
});
console.log('reducedValue2: ', reducedValue2);


// reduceRight
// работает аналогично методу reduce,
// но проходит массив справа на лево
