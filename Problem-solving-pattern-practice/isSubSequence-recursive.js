function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}

console.log(isSubsequence('abcdb', 'abracadabra')); // true
console.log(isSubsequence('hello', 'hello world')); // true
isSubsequence('sing', 'sting'); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)