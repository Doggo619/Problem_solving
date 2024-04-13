function reverseArrayInPlace(arr) {
    const len = arr.length;
    const mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        // Swap elements arr[i] and arr[len - 1 - i]
        const temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray); // [1, 2, 3, 4, 5]

reverseArrayInPlace(myArray);
console.log("Reversed Array:", myArray); // [5, 4, 3, 2, 1]
