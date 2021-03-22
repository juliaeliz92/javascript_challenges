function telephoneCheck(str) {
  
    return /^(1|1 ){0,1}(\(\d{3}\)|\d{3})(-| ){0,1}(\d){3}(-| ){0,1}(\d){4}$/.test(str);
  
  }
  
  console.log(telephoneCheck("555-555-4444"));