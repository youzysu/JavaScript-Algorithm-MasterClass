function minSubArrayLen(arr, sum) {
    // start, end point 모두 기본 0으로 두고, return하는 minLength는 기본 가장 큰 값으로 설정해둔다.
    // total과 sum을 비교하면서 start, end point를 이동해준다
        // total이 sum보다 작으면 end를 이동 && arr.length보다 작을 때까지
        // total이 sum보다 크면 start를 이동
    let start = 0
    let end = 0
    let total = 0
    
}

minSubArrayLen([2,3,1,2,4,3], 7) // 2
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5