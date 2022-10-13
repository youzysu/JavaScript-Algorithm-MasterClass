function countUniqueValues(arr) {
    const set = new Set(arr)
    return set.size;
}

function countUniqueValues(arr) {
    let maker = 0;
    let finder = 1;

    while (finder == arr.length - 1) {
        if (arr[maker] == arr[finder]) {
            finder++;
        } else if (arr[maker] < arr[finder]) {
            maker++;
            arr[maker] = arr[finder]
            finder++; 
        } 
    } return maker + 1;    
}

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        } 
    } return i + 1
}


countUniqueValues([-2, -1, -1, 0 ,1]) // 4

/* 
arr[0] < arr[1]
0++
arr[++0] = arr[1]
1++

arr[1] == arr[2]
2++

arr[1] < arr[3]
1++
arr[2] = arr[3] // -2, -1, 0, 0, 1
3++

arr[2] < arr[4]
2++
arr[++2] = arr[4] // arr[3] = arr[4] // -2, -1, 0, 1, 1
4++

return answer + 1
*/