function sameFrequency(int1, int2) {
    // input two positive integers
    // output boolean: if the two numbers have the same frequency of digits
    // int도 length가.. 되던가.. 안되는군.. string으로 바꿔서 풀기?
    const num1 = String(int1); // "182"
    const num2 = String(int2); // "281"

    if (num1.length !== num2.length) return false;

    let obj = {}

    for (let one of num1) {
        obj[one] == undefined ? obj[one] = 1 : obj[one] += 1 // obj.one 과 obj[one] syntax
    }

    for (let one of num2) {
        if (!obj[one]) return false;
        else obj[one] -= 1
    } return true

  }

sameFrequency(182,281) // true
sameFrequency(34,14) // false