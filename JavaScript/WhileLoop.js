let i = 2;
while (i < 10) {
    console.log(i);
    i += 2;
}

const vehicle = ['car', 'bike', 'bus', 'train', 'plane'];
let j = 0;
while (j < vehicle.length) {
    console.log(j+"th vehicle is : "+vehicle[j]);
    j++;
}

const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
let k = 0;
var fruit = '';
while (k < fruits.length) {
    fruit += fruits[k] + ' ';
    k++;
}
console.log(fruit);