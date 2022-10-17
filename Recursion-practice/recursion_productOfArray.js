function productOfArray(arr) {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}

// iteration
function productOfArray(arr) {
    for (let int of arr) {
        let sum = 1
        sum *= int
    } return sum
}