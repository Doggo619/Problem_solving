function findCommonElements(arr1, arr2) {
    // Create a Set to store elements of arr1
    const set = new Set(arr1);
    const commonElements = [];

    // Iterate through arr2 and check if each element exists in the Set
    for (let element of arr2) {
        if (set.has(element)) {
            commonElements.push(element);
            // Remove the element from the Set to avoid duplicates
            set.delete(element);
        }
    }

    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const result = findCommonElements(array1, array2);
console.log("Common Elements:", result); // Output: [4, 5]
