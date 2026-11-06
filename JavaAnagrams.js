function isAnagram(str1, str2) {
    // 1. Helper function to clean, lowercase, sort, and join a string
    const cleanAndSort = (str) => 
        str.toLowerCase()                 // Handle case-insensitivity
           .replace(/[^a-z0-9]/g, '')     // Remove spaces and punctuation
           .split('')                     // Convert to character array
           .sort()                        // Sort alphabetically
           .join('');                     // Join back into a string

    // 2. Compare both processed strings
    return cleanAndSort(str1) === cleanAndSort(str2);
}

// --- Example Usage ---
console.log(isAnagram("listen", "silent"));        // true
console.log(isAnagram("Dormitory", "dirty room")); // true (ignores spaces and casing)
console.log(isAnagram("hello", "billion"));       // false
