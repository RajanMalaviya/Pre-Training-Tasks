let i = 0;
let evenNumbers = '';
let oddNumbers = '';

for (i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        evenNumbers += i + ' ';
    } else {
        oddNumbers += i + ' ';
    }
}

console.log('Even numbers between 1 to 30 are : ' + evenNumbers);
console.log('Odd numbers between 1 to 30 are : ' + oddNumbers);

const vehicle = ['car', 'bike', 'bus', 'train', 'plane'];
let j = 0;
let vehicleList = '';
for (j = 0; j < vehicle.length; j++) {
    vehicleList += vehicle[j] + ' ';
}
console.log('Vehicles are : ' + vehicleList);