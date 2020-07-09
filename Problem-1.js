// Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.

function deepEqual(elem1, elem2) {
    let elem1Keys = Object.keys(elem1);
    let elem2Keys = Object.keys(elem2);
    if (elem1Keys.length != elem2Keys.length) {
      return false
    } 
    let result = false;
    for (let key of elem1Keys) {
      if (elem1[key] == elem2[key]) {
        result = true;
      } else if (
        typeof elem1[key] == 'object' && 
        typeof elem2[key] == 'object' && 
        deepEqual(elem1[key], elem2[key])
      ) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    return result;
  }
  console.log(deepEqual({t: 8, h: {u: {s: 100},}, g: 3,}, {h: {u: {s: 100},}, g: 3, t: 8,}));