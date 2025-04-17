// Coding Exercise - JS: Sorted Squared Array
// Question

// You are given an array of Integers in which each subsequent value is not less than the previous value.
//  Write a function that takes this array as an input 
// and returns a new array with the squares of each number sorted in ascending orde

// Function to return sorted squares (Brute Force)
function sortedSquared(array) {
    const squared = new Array(array.length).fill(0);

    // Square each element
    for (let i = 0; i < array.length; i++) {
        squared.push(Math.pow(array[i],2)); //squared[i] * sqaured[i]
    }

    // Sort the squared values
    squared.sort((a, b) => a - b);

    //squared.sort(function(a,b){return a-b})

    return squared;
}

// Test case inputs
const testCases = [
    [],                            // Empty array
    [-5, -3, -1],                  // All negative elements
    [2, 3, 5],                     // All positive elements
    [-4, -1, 0, 3, 10],            // Mixed negative and positive
    [-2, -2, 0, 2, 2],             // Duplicate elements
];

// Running test cases
for (let i = 0; i < testCases.length; i++) {
    const input = testCases[i];
    const result = sortedSquared(input);
    console.log(`Test Case ${i + 1}:`);
    console.log(`Input: ${JSON.stringify(input)}`);
    console.log(`Output: ${JSON.stringify(result)}\n`);
}

//TIMECOMPLEXITY O(nlogn)
//SPACECOMPLEXITY 0(n)