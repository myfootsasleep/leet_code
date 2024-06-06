/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string_1 = x.toString()
    let string_2 = ""
    for (let i = string_1.length-1; i >= 0; i--) {
        string_2 += string_1[i]
    }
    if (string_1 === string_2) {
      return true
    }
    else{
      return false
    }
    };