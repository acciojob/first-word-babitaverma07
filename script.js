function firstWord(str) {
    // Check if the string is empty
    if (str === '') {
        return '';
    }
    
    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');
    
    // If no space is found, return the entire string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Return the substring up to the first space
    return str.substring(0, spaceIndex);
}

// Example usage:
console.log(firstWord('see and stop')); // 'see'
console.log(firstWord(' Hello World!')); // 'Hello'
console.log(firstWord('12345')); // '12345'
console.log(firstWord('')); // ''
