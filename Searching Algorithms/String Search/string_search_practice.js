function naiveSearch(long, short) {
  let count = 0;
  let shortCurrentIndex = 0;
  let longCurrentIndex = 0;

  while (longCurrentIndex < long.length) {
    if (short[shortCurrentIndex] === long[longCurrentIndex]) {
      shortCurrentIndex++;
      longCurrentIndex++;
    }
    if (shortCurrentIndex === short.length) {
      count++;
      shortCurrentIndex = 0;
    }
    if (short[shortCurrentIndex] !== long[longCurrentIndex]) {
      longCurrentIndex++;
    }
  }
  return count;
}

console.log(naiveSearch('wowomgzomg', 'omg'));
console.log(naiveSearch('lorie loled', 'lol'));
console.log(naiveSearch('poppoppopppop', 'pop'));
