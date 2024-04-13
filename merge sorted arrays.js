function mergeSortedArrays(arr1, arr2) {
    // Merge the two arrays using spread operator and sort the result
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);

    return mergedArray;
}

// Example usage:
const sortedArray1 = [1, 3, 5, 7, 9];
const sortedArray2 = [2, 4, 6, 8, 10];

const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
console.log("Merged Sorted Array:", mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
