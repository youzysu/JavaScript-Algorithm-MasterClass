//Start looping from with a variable called i the end of the array towards the beginning
//Start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater that arr[j+1], swap those two values
// return the sorted array

//Solution 1
function bubbleSort1(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

//Solution 2
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

const bubbleSort2 = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1)
            noSwaps = false
        } 
    if (noSwaps) break;
    }
    return arr;
}