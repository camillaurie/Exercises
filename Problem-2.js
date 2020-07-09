// Функция превращает массив в связный список.

let list = {};
function arrayToList(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!list.value) {
      list.value = arr[i];
      list.rest = null;
    } else if (list.value) {
      list = {value: arr[i], rest: list};
    }
  }
  return list;
}
console.log (arrayToList([1, 2, 3]));