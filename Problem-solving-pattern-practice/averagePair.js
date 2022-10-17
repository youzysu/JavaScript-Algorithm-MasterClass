function averagePair(arr, target) {
    if (arr.length === 0) return false

    let pointer = 0
    let pair = target * 2 - arr[pointer]

    while (pointer <= arr.length / 2) {
        if (arr.includes(pair) === false ) {
            pointer++
            pair = target * 2 - arr[pointer]
        } else if (arr.includes(pair)) {
            return true
            break;
        }
    } return false;
}

console.log(averagePair([1,2,3],2.5)) // true
