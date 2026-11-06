function countVowelsAndConsonants(str) {
    // 1. Define vowels
    const vowels = 'aeiou';
    
    // 2. Initialize counters
    let vowelCount = 0;
    let consonantCount = 0;
    
    // 3. Clean and convert to lowercase to handle case-insensitivity
    const lowerStr = str.toLowerCase();
    
    // 4. Loop through each character
    for (let char of lowerStr) {
        // Check if the character is a valid lowercase letter (a-z)
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    
    // 5. Return the results as an object
    return { vowels: vowelCount, consonants: consonantCount };
}

// --- Example Usage ---
const text = "Hello, World! 123";
const result = countVowelsAndConsonants(text);

console.log(`Vowels: ${result.vowels}`);       // Vowels: 3 (e, o, o)
console.log(`Consonants: ${result.consonants}`); // Consonants: 7 (h, l, l, w, r, l, d)
