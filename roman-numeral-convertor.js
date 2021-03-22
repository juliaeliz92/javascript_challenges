function convertToRoman(num) {
    const romanLiterals = [
        {
            "roman": 'I',
            "value": 1
        },
        {
            "roman": 'V',
            "value": 5
        },
        {
            "roman": 'X',
            "value": 10
        },
        {
            "roman": 'L',
            "value": 50
        },
        {
            "roman": 'C',
            "value": 100
        },
        {
            "roman": 'D',
            "value": 500
        },
        {
            "roman": 'M',
            "value": 1000
        }           
    ];
    let numArr = [], output = "";
    while(num > 0) {
        numArr.push(num % 10);
        num = Math.floor(num / 10);
    }
    for(let i = numArr.length - 1; i >= 0 ; i--) {
        let digit = numArr[i] * Math.pow(10, i);
        while(digit > 0) {
            let romanObject = romanLiterals.find(roman => roman.value === digit);
            if(romanObject != undefined) {
                output += romanObject.roman;
                digit = 0;
            } else {
                let romanIndex;
                romanObject = romanLiterals.find((roman, index) => {
                    if(roman.value > digit) {
                        romanIndex = index;
                        return roman;
                    }
                });
                let remain, remainObject;
                if(romanObject != undefined) {
                    remain = romanObject.value - digit;
                    remainObject = romanLiterals.find(roman => roman.value === remain);
                } else {
                    remainObject = {
                        roman : ""
                    };
                    romanObject = romanLiterals[romanLiterals.length - 1];
                }
                if(remainObject != undefined) {
                    output += remainObject.roman + romanObject.roman;
                    digit = digit - romanObject.value;
                } else {
                    let romanObject2 = romanLiterals[romanIndex - 1];
                    output += romanObject2.roman;
                    digit -= romanObject2.value;
                }
            }
        }
    }
    return output;
}

console.log(convertToRoman(3999));