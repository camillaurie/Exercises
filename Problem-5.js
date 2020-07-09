// Это чистая функция, она возвращает новый массив, поэтому результат у нее всегда одинаковый при одинаковых параметрах.
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}


let arr = [3, 6, 'apple', 0]

// Это грязная функция. Ее результат зависит от внешней переменной (в данном случае arr). 
function reverseArrayInPlace() {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  arr = newArr;
}

// Проверка первой функции. Всегда один результат. 
console.log (reverseArray([3, 6, 'apple', 0]));
console.log (reverseArray([3, 6, 'apple', 0]));
console.log (reverseArray([3, 6, 'apple', 0]));

// Проверка второй функции. Результат разный.
reverseArrayInPlace();
console.log(arr);
reverseArrayInPlace();
console.log(arr);

