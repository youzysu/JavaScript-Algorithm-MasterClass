function areThereDuplicates() {
    let set = new Set(arguments);
    console.log(arguments)
    console.log(set)
    return console.log(set.size !== arguments.length)
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true