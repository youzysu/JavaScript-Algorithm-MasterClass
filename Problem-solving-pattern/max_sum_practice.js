function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    
    let maxSum = 0;
    let compareSum = 0;

    for (let i = 0; i < num; i++) {
        compareSum += arr[i]
    }
    maxSum = compareSum

    for (let i = 0; i < arr.length - num; i++) {
        compareSum = compareSum - arr[i] + arr[i + num]
        if (compareSum > maxSum) maxSum = compareSum
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))