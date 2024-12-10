const arr = new Array('BMW', 'Audi', 'Mercedes', 'Toyota', 'Ford');
var i = 0;
console.log('Array is : ' + arr);
console.log('Length of the array is : ' + arr.length);
console.log('Sorted array is : ' + arr.sort());

// add elements to the array
arr.push('Honda');
arr[6] = 'Chevrolet';
console.log('Array after adding elements is : ' + arr);

// remove elements from the array
arr.pop();
console.log('Array after removing elements is : ' + arr);

const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true
console.log(fruits instanceof Array); // true