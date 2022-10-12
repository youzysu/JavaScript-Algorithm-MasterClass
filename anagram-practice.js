function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
      return false;
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for (let char of str1) {
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of str2) {
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    for (let char of str1) {
      if (!frequencyCounter2[char]) return false
      if (frequencyCounter1[char] !== frequencyCounter2[char]) return false
      else return true
    }
  }

console.log(validAnagram('anagrams', 'nagaramm'));
console.log(validAnagram('anagram', 'nagaram'))