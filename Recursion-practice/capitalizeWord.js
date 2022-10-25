// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.
// Trial
function capitalizeWords(arr) {
    let newArr = []
    if (arr.length === 0) return newArr
    else {
        newArr.push(arr[0].toUpperCase())
        return newArr.concat(capitalizeWords(arr.slice(1)))
    }
}

//Solution
function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1)); // 마지막 요소를 뺀 배열
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }