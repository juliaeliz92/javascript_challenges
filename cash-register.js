function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    let cidArr = removeZero(cid, change);
    //console.log('cid', cidArr)
    let outputChange = [];
    while(cidArr.length > 0) {
      let drawObject = cidArr[cidArr.length - 1];
      let currencyObject = currency.find((cur) => cur[0] == drawObject[0]);
      //console.log('change, draw, currency', change, drawObject, currencyObject)     
      change = (change - currencyObject[1]).toFixed(2);
      //console.log('change', change)
      cidArr[cidArr.length - 1][1] = parseFloat((cidArr[cidArr.length - 1][1]- currencyObject[1]).toFixed(2));
      //console.log('cid', cidArr)
      let getOutput = outputChange.find((cur) => cur[0] == currencyObject[0]);
      if(!getOutput) {
        outputChange.push([currencyObject[0], currencyObject[1]]);
      } else {
        //console.log('getoutput', currencyObject, getOutput)
        getOutput[1] = ((getOutput[1] * 100) + (currencyObject[1] * 100))/100;
        //console.log('convert', getOutput[1])
        outputChange.map(cur => {
          if(cur[0] == getOutput[0]) {
            cur[1] = parseFloat(getOutput[1].toFixed(2));         
          }
        });
      }
      //console.log('output', outputChange);
      cidArr = removeZero(cid, change);
    } 
    if(change != 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      let total = 0;
      //console.log(cid)
      cid.map((cur) => {
        total += cur[1]
      });
      if(total == 0) {
        cid.map((cur, index) => {
          if(!outputChange[index]) {
            outputChange.push(cur)
          }
        })
        return {status: "CLOSED", change: outputChange}
      }
      return {status: "OPEN", change: outputChange}
    }
    
  } 
  
   var currency = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20],["ONE HUNDRED", 100]];
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  function removeZero(curr, change){
    //console.log(curr, change)
    let modCurr = curr;
    return modCurr.filter((cur, index) => (cur[1] != 0) && (currency[index][1] <= change));
  }