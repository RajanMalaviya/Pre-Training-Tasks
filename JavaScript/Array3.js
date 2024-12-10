const person = [{
    name: 'John',
    age: 25,
    designation: 'Software Engineer'
},
{
    name: 'Jane',
    age: 22,
    designation: 'Software Developer'
},
{
    name: 'David',
    age: 30,
    designation: 'Project Manager'
}
];

let k = 0;
for (k = 0; k < person.length; k++) {
    console.log(person[k].name + ' is ' + person[k].age + ' years old and works as ' + person[k].designation);
}
console.log();

console.log('First element of the array is : ');
console.log(person[0]);
console.log();
console.log('Last element of the array is : ');
console.log(person[person.length - 1]);
console.log();