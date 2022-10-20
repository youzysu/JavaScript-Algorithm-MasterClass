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

// Solution
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}