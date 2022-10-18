// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
// 거꾸로해도 우영우인지 boolean 

//Trial
function isPalindrome(str) {
  if (str.length < 2) return true;
  return str.slice(0, 1) === str.slice(-1) ? isPalindrome(str.slice(1, -1)) : false
}

// solution
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

console.log(isPalindrome('tacocat')) // true