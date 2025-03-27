// Count the vowels in a string.

function CountVovels(str){
    const vowels = "aeiou";
    CountVovels= 0;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            CountVovels++;
        }
    }

    return CountVovels;
}

console.log(CountVovels("i love You so much saloni ji "));

/*Method 
1. Create a variable to store the count of vowels. [CountVovels= 0]
2. Iterate over each character of the string.-- for(let char of str.toLowerCase())
3. Check if the character is a vowel. -- if(vowels.includes(char))
4. If it is, increment the count of vowels.
5. Return the count of vowels.*/
