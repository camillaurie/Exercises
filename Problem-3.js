// Функция превращает связный список в массив.


let arr = [];
function listToArray(list) {
  for (let i = 0; list.rest != null ; i++) {
    if (list.rest) {
      arr.push(list.value);
      list = list.rest;
    }
  }
  if (list.rest == null) {
    arr.push(list.value);
  }
  return arr;
}
console.log (listToArray({ value: 7, rest: { value: 2, rest: { value: 'poop', rest: null } } }));
