// Program to find the length of the array, sort the array, find the maximum and minimum number in the array, sum of the numbers in the array and average of the numbers in the array.

var arr = [20,50,40,30,10];
var i = 0;
var max = arr[i];
var min = arr[i];
var sum = 0;
var avg = 0;

for(i=0;i<arr.length;i++){
    sum += arr[i];
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]<min){
        min = arr[i];
    }
}

console.log('Array is : '+arr);
console.log('Length of the array is : '+arr.length);
console.log('Sorted array is : '+arr.sort());
console.log('Maximum number in the array is : '+max);
console.log('Minimum number in the array is : '+min);
console.log('Sum of the numbers in the array is : '+sum);
console.log('Average of the numbers in the array is : '+(sum/arr.length));
