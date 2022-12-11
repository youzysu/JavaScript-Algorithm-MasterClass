function binarySearch(arr, value) {
    let left = 0
    let right = arr.length - 1
    let middle = Math.floor((left + right) / 2)

    while (arr[middle] !== value && left <= right) {
        if (arr[middle] < value) left = middle + 1
        else right = middle - 1
        middle = Math.floor((left + right) / 2)
    } return (arr[middle] === value ? middle : -1)
}

console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1