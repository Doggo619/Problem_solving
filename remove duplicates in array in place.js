function removeDuplicatesInPlace(arr) {
    // Sort the array (optional but helps to group duplicates together)
    arr.sort((a, b) => a - b);

    let uniqueIndex = 0; // Index to track unique elements

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If current element is different from the element at uniqueIndex
        if (arr[i] !== arr[uniqueIndex]) {
            // Move uniqueIndex forward
            uniqueIndex++;
            // Copy the current element to the uniqueIndex position
            arr[uniqueIndex] = arr[i];
        }
    }

    // Remove the duplicate elements by truncating the array
    arr.length = uniqueIndex + 1;

    return arr; // The array now contains only unique elements
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 3];

removeDuplicatesInPlace(arrayWithDuplicates);
console.log("Array without duplicates:", arrayWithDuplicates); // Output: [1, 2, 3, 4, 5]
