/**
 * 深拷贝
 */

const deepClone = (object) => {
  // 如果不是对象，则不支持深拷贝
  if (object && typeof object !== 'object') return;

  const newObject = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = typeof object[key] === "object" ? deepClone(object[key]) : object[key];
    }
  }

  return newObject;
}


console.log(deepClone([1, 2, { a: 1 }, 4]));
console.log(deepClone({ a: 1, b: [1, 2, 3, { c: 4 }] }));