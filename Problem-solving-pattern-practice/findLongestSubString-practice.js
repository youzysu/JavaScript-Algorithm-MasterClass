function findLongestSubstring(str) {
  let start = 0
  const location = {}
  let longest = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (location[char]) start = Math.max(start, location[char])
    longest = Math.max(longest, i + 1 - start)
    location[char] = i + 1
  }
  console.log(longest)
}

findLongestSubstring('thecatinthehat') // 7 hecatin