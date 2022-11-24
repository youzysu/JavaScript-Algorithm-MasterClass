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
  setValue(key, value) {
    const index = this.#hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = new Map();
    this.keyMap[index].set(key, value);
  }

  getValue(key) {
    const index = this.#hash(key);
    if (this.keyMap[index] && this.keyMap[index].has(key)) {
      return this.keyMap[index].get(key);
    }
    return undefined;
  }

  getKeys() {
    let keys = [];
    for (let index = 0; index < this.keyMap.length; index++) {
      if (this.keyMap[index]) {
        keys = keys.concat([...this.keyMap[index].keys()]);
      }
    }
    return [...new Set(keys)];
  }

  getValues() {
    let values = [];
    for (let index = 0; index < this.keyMap.length; index++) {
      if (this.keyMap[index]) {
        values = values.concat([...this.keyMap[index].values()]);
      }
    }
    return [...new Set(values)];
  }
}

const ht = new HashTable(17);
ht.setValue('maroon', '#800000');
ht.setValue('yellow', '#FFFF00');
ht.setValue('olive', '#808000');
ht.setValue('salmon', '#FA8072');
ht.setValue('lightcoral', '#F08080');
ht.setValue('mediumvioletred', '#C71585');
ht.setValue('plum', '#DDA0DD');
ht.setValue('purple', '#DDA0DD');
ht.setValue('violet', '#DDA0DD');
ht.setValue('maroon', '#800000');
ht.setValue('rmaoon', '#FFFF00');

console.log(ht.getValues());
console.log(ht.getKeys());
