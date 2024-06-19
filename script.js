// Step 1: Create an array named numbers with some random integer values.
const numbers = [12, 7, 22, 13, 5, 8, 19, 30];

// Step 2: Create a function named filterArray that takes two arguments: arr (an array) and callback (a callback function).
function filterArray(arr, callback) {
    // Step 4: Inside the filterArray function, define a callback function named callback.
    const filteredArray = [];

    // Step 3: Inside the filterArray function, iterate over each element of the arr array.
    for (let i = 0; i < arr.length; i++) {
        // Call the callback function on each element.
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    // Return the filtered array.
    return filteredArray;
}

// Step 5: The callback function should check if the current element is even or odd.
function isEven(num) {
    return num % 2 === 0;
}

// Step 6: Use the filterArray function to filter the even numbers.
const evenNumbers = filterArray(numbers, isEven);

// Display the original array and the filtered array using console.log().
console.log('Original array:', numbers);
console.log('Filtered array (even numbers):', evenNumbers);

// Test with another array and callback function
const oddNumbers = filterArray(numbers, num => num % 2 !== 0);
console.log('Filtered array (odd numbers):', oddNumbers);
