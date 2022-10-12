function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let charBox = {};

    for (let char of str1) {
        charBox[char] ? charBox[char] += 1 : charBox[char] = 1
    }

    console.log(charBox);

    for (let char of str2) {
        if (!charBox[char]) return false;
        else charBox[char] -= 1
    } return true
}

console.log(validAnagram('anagrams', 'nagaramm'));
console.log(validAnagram('anagram', 'nagaram'))