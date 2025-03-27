//2. Create a function that takes a string and returns `true` if it’s a palindrome, `false` otherwise.
//- Explanation : Teaches string manipulation and conditional checks.


let CheckPilindrome=(str)=>
{
        str=str.toLowerCase()
        let reversedStr = str.split('').reverse().join('')
        return str===reversedStr
}

console.log(CheckPilindrome("Naman"));
