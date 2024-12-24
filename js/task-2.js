function makeArray(firstArray, secondArray, maxLength) {
  //Реалізація без перевірки на величину maxLength
  //return firstArray.concat(secondArray).slice(0, maxLength);
  return maxLength < firstArray.concat(secondArray).length
    ? firstArray.concat(secondArray).slice(0, maxLength)
    : firstArray.concat(secondArray);
}
console.log("");
console.log("----------Друге завдання----------");

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
