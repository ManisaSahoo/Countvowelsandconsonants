function isPalindrome(str) {
    // 1. Clean the string: convert to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Initialize pointers at the beginning and the end
    let left = 0;
    let right = cleanedStr.length - 1;
    
    // 3. Compare characters moving towards the center
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // It is a palindrome
}

// --- Example Usage ---
console.log(isPalindrome("racecar"));       // true
console.log(isPalindrome("Hello"));         // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true


