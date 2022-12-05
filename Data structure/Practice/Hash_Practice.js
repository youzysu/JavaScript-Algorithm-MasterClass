// arrayLength가 prime number이면 충돌이 덜 일어난다.
// total value에 왜 소수를 곱해주는 건지 설명이 없다. 분모와 분자에 서로 다른 소수가 있으면 더 충돌이 적게 일어나게 되나?

function hash(key, arrayLength) {
  let total = 0;
  const PRIME_NUMBER = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const value = key.charCodeAt(i) - 96;
    total = (value + total * PRIME_NUMBER) % arrayLength;
  }
  console.log(total);
  return total;
}

hash('applelovepureblue', 31);
