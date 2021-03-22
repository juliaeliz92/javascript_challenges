function rot13(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      let rotCode;
      if (code + 13 > 90 ) {
        rotCode = code - 13;
      } else {
        rotCode = code + 13;
      }
      output += String.fromCharCode(rotCode);
    } else {
      output += str[i];
    }  
  }
  return output;
}

console.log(rot13("SERR PBQR PNZC"));