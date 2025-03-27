let str = ("naman") 

function CheckPilindrome(inputStr){
    let cleanedStr = inputStr.toLowerCase().split('').reverse().join('')

    return cleanedStr ===inputStr.toLowerCase();
}


console.log(CheckPilindrome(str));
