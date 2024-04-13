function rotateArrayRight(arr, k) {
    // Calculate effective rotation steps (k modulo array length)
    k = k % arr.length;

    // Loop to perform right rotation 'k' times
    for (let times = 0; times < k; times++) {
        // Remove the last element of the array and store it
        let lastElement = arr.pop();

        // Add the last element to the beginning of the array
        arr.unshift(lastElement);
    }

    return arr;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let k = 13;

let rotatedArray = rotateArrayRight(arr, k);
console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]
