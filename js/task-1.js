function isEnoughCapacity(products, containerSize) {
  let sumValues = 0;
  for (const val of Object.values(products)) {
    sumValues += val;
  }
  return sumValues <= containerSize;
}

console.log("----------Перше завдання----------");
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
