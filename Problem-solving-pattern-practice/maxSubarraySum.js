function maxSubarraySum (arr, length) {
    if (arr.length < length) return null
    let tempSum = 0
    let maxSum = 0
    for (let i = 0; i < length; i++) {
        tempSum += arr[i]
        maxSum = tempSum
    }
    for (let i = 0; i < arr.length - length; i++) {
        tempSum = tempSum - arr[i] + arr[i + length]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

maxSubarraySum([100,200,300,400], 2) // 700
