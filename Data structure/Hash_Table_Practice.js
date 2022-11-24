class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  #hash(key) {
    let total = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key.charCodeAt(i) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  // 왜 key, value를 array에 저장할까?
  set(key, value) {
    const index = this.#hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this.#hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  // keyMap도 array 대신 map을 사용해서 구현할 수 있나?
  set2(key, value) {
    const index = this.#hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = new Map();
    this.keyMap[index].set(key, value);
  }

  get2(key) {
    const index = this.#hash(key);
    if (this.keyMap[index] && this.keyMap[index].has(key)) {
      return this.keyMap[index].get(key);
    }
    return undefined;
  }
}

const ht = new HashTable(5);
ht.set2('maroon', '#800000');
ht.set2('rmaoon', '#FFFF00');
console.log(ht.get2('rmaoon'));
console.log(ht.get2('rmaooa'));
console.log(ht);
