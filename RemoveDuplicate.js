function removeDuplicates(str) {
    // 1. Create a Set from the string (automatically filters out duplicates)
    // 2. Spread the Set into an array and join it back into a string
    return [...new Set(str)].join('');
}

// --- Example Usage ---
console.log(removeDuplicates("programming"));    // "progamin"
console.log(removeDuplicates("hello world"));    // "helo wrd"
console.log(removeDuplicates("Banana"));         // "Ban]a" (Case-sensitive: 'B' and 'b' are different)
