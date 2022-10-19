// Trial
function capitalizeFirst (strArr) {
    let answer = [];
    if (strArr.length === 0) return answer
    else {
        let word = strArr[0]
        word = word[0].toUpperCase() + word.slice(1)
        answer.push(word)
        return answer.concat(capitalizeFirst(strArr.slice(1)))
    }
  }
  
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// Solution 문제가 다름
function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()]; // CAR
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

capitalizeWords(['car','taco','banana'])