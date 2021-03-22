function palindrome(str) {
    let charArr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reverseArr = charArr.split("").reverse();
    let original = "", reversed = "";
    for(let i = 0; i < charArr.length; i++) {
      original += charArr[i];
      reversed += reverseArr[i];
    }
    return original == reversed;
  }
  
  console.log(palindrome("five|\_/|four"));