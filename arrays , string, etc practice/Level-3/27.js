// Create a function that takes two strings and checks if they are anagrams.
function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.split(' ').join('').toLowerCase();
    str2 = str2.split(' ').join('').toLowerCase();

    // If lengths are different, not anagrams
    if (str1.length !== str2.length) return false;

    // Sort and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// ✅ Example usage:
console.log(areAnagrams("listen", "silent"));    // true
console.log(areAnagrams("hello", "world"));      // false
console.log(areAnagrams("triangle", "integral")); // true
