function nestedEvenSum (obj) {
  // value가 number이면 더한다.
  // value가 object이면 recursion
  let sum = 0
  for (let key in obj) {
    if (typeof(obj[key]) === "number" && obj[key] % 2 === 0) {
      sum += obj[key]
    } if (typeof(obj[key]) === "object") {
      sum += nestedEvenSum(obj[key])
    } 
  } return sum
}
  
  let obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
console.log(nestedEvenSum(obj2)); // 6
  nestedEvenSum(obj2); // 10