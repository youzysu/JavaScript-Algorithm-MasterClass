// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
// 하나만 true여도 true

function someRecursive(arr, func) {
    if (arr.length === 0) return false
    if (func(arr[0])) return true
    else return someRecursive(arr.slice(1), func)
}

console.log(someRecursive([1,2,3,4], val => val % 2 !== 0))