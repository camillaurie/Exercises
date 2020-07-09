// Чистые реализации listToArray и arrayToList. Добавлена функция prepend, добавляющая элемент в начало связного списка.

function listToArray(list) {
    let arr = [];
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
  function arrayToList(arr) {
    let list = {};
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
  function prepend (element, list) {
    let arr = listToArray(list);
    arr.reverse();
    arr.push(element);
    arr.reverse();
    arr = arrayToList(arr);
  
    return arr;
  }
  const originalList = { value: 7, rest: { value: 2, rest: { value: 'poop', rest: null } } };
  console.log(prepend(15, originalList));