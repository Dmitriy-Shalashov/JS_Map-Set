'use strict'

// Map
// Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
const aboutCar = [
   ['brand', 'alfa romeo'],
   ['model', 'guilia'],
   ['color', 'red']
]
const specifications = [
   ['engine volume', '2.9'],
   ['engine power', '510'],
   ['fuel', 'benzine']
]

const carInfo = new Map(aboutCar);

// Получите список ключей и значений отдельно.
console.log('carInfo.keys() :>> ', carInfo.keys());
console.log('carInfo.values() :>> ', carInfo.values());

// Получите текущее количество элементов.
console.log('carInfo.size :>> ', carInfo.size);

// Добавьте и удалите элемент

carInfo.set(specifications[0][0], specifications[0][1]);
carInfo.set(specifications[1][0], specifications[1][1]);
carInfo.set(specifications[2][0], specifications[2][1]);

// Произведите поиск по ключу
console.log('carInfo.get(engine power) :>> ', carInfo.get(`engine power`));


// Set

// Создайте коллекцию Set с начальными значениями 1,2,3. 
const set = new Set([1, 2, 3])

// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
console.log('set.has(3) :>> ', set.has(3));
console.log('set.has(4) :>> ', set.has(4));

// Добавите еще несколько элементов.
set.add(10).add(8).add(7).add(10)
console.log('set :>> ', set);

// С помощью цикла for-of переберите ее значения и выведите в консоль.
for (const value of set) {
   console.log(value);
}

// Найдите сумму этих значений.
let sum = 0;
for (const value of set) {
   sum += value;
}
console.log('sum :>> ', sum);

// Удалите элемент 2.
console.log('set.delete(2) :>> ', set.delete(2));

// Очистите всю коллекцию.
console.log('set.clear() :>> ', set.clear());
console.log('set.size :>> ', set.size);