// concat..
function flatten(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) newArr = newArr.concat(flatten(arr[i]))
        else newArr.push(arr[i])
    }
    return newArr
}
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]] ] ] ) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])...? // [1,2,3] 

// const array = [ [ [ [1], [ [ [2] ] ], [[[[[[[3]]]]]]]  ] ] ]
// array[0][0][0] === 1
// console.log(array[0][0][1][0][0][0]) === 2