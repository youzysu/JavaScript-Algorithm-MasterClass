function findLongestSubstring(str) {
  let longest = 0; // 현재 위치의 char에서 start를 뺀 길이
  let seen = {}; // char의 위치를 저장하는 Object
  let start = 0; // char가 중복되지 않도록 시작하는 포인트 지정
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // 기존에 있는 char이면 start를 바꿔주어야 함
    if (seen[char]) {
      start = Math.max(start, seen[char]); // 항상 seen[char]가 더 큰게 아닌가 -> 다른 char도 겹치지 않아야 하므로 이전 start와 비교하여 큰 값이 시작점이 된다.
    } 

    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i + 1 - start);

    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('thecatinthehat') // 7 hecatin
char = t, longest = 1, seen = {t: 1}
char = h, longest = 2, seen = {t:1, h:2}
char = e, longest = 3, seen = {t:1, h:2, e:3}
char = c, longest = 4, seen = {t:1, h:2, e:3, c:4}
char = a, longest = 5, seen = {t:1, h:2, e:3, c:4, a:5}
char = t, start = 1, longest = Math.max(5, 6 - 1), seen = {t:6, h:2, e:3, c:4, a:5}
char = i, start = 1, longest = Math.max(5, 7 - 1), seen = {t:6, h:2, e:3, c:4, a:5, i:7}
char = n, start = 1, longest = Math.max(5, 7 - 1), seen = {t:6, h:2, e:3, c:4, a:5, i:7}
char = t, start = 6, longest = Math.max(5, 9 - 6), seen = {t:9, h:2, e:3, c:4, a:5, i:7}
char = h, start = Math.max(6, 2), longest = Math.max(5, 9 - 6), seen = {t:9, h:2, e:3, c:4, a:5, i:7}