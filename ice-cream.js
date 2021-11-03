// // Do not modify these first two lines
// const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
// console.log(iceCreamFlavours);

// // Your code below here...
// iceCreamFlavours.push("root beer");
// console.log(iceCreamFlavours);
// console.log(iceCreamFlavours[0])
// console.log(iceCreamFlavours[5])
// console.log(iceCreamFlavours.length)
// let a = 3;
// let b = 4;
// console.log(b)

const areMultiples  = function (bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
}

console.log(areMultiples(15, 4));
const seasons = ["spring", "summer", "fall"];
const length = seasons.length;

seasons.push("winter");

console.log(length);
console.log(seasons.length);

let sum = 3 + 2;

const doubleSum = function(a, b) {
  let sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum);