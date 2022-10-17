function naiveSearch(long, short) {
    let count = 0;
    let i = 0
    let j = 0

    while (j < long.length) {
        if (short[i] === long[j]) {
            i++
            j++
        }
        if (i === short.length) {
            count++
            i = 0
        }
        if (short[i] !== long[j]) {
            j++
        }
    } return count
}

console.log(naiveSearch("wowomgzomg", "omg"))
console.log(naiveSearch("lorie loled", "lol"))
console.log(naiveSearch("poppoppopppop", "pop"))