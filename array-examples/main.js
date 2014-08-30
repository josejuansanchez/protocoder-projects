/*
*	
*	Using Arrays in Javascript
*	Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*
*/

// Example 01
// Accessing array elements
var arr = ["this is the first element", "this is the second element"];
console.log(arr[0]);              // prints "this is the first element"
console.log(arr[1]);              // prints "this is the second element"
console.log(arr[arr.length - 1]); // prints "this is the second element"

// Example 02
// Adding elements to an array
var fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits);

// Example 03
// Removing the last element of an array
console.log("fruits before: " + fruits);
var popped = fruits.pop();
console.log("fruits after: " + fruits);
console.log("Removed this element: " + popped);

// Example 05 
// Sorting the elements of an array in place and returns the array.
// The default sort order is according to string Unicode code points.
var scores = [1, 2, 10, 21]; 
scores.sort(); // prints: [1, 10, 2, 21]
console.log(scores);

// Example 06
// Finding all the occurrences of an element
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var idx = array.indexOf("a");
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf("a", idx + 1);
}
console.log(indices);
