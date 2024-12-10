/*This file contains various Javascript Objects examples */

// Object creation
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person); // { name: 'John', age: 30, city: 'New York' }
console.log(typeof(person)); // object
console.log();

// Accessing object properties
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.city); // New York
console.log();

// Changing object properties
person.name = "Jane";
console.log(person.name); // Jane
console.log();

// Adding new properties
person.job = "Developer";
console.log(person.job); // Developer
console.log();

// Deleting properties
delete person.city;
console.log(person.city); // undefined
console.log();

// Object methods
const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person1.fullName()); // John Doe
console.log();

// Object constructors
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
const person2 = new Person("John", 30, "New York");
console.log(person2); // Person { name: 'John', age: 30, city: 'New York' }
// console.log(person2.name); // John
// console.log(person2.age); // 30
// console.log(person2.city); // New York
console.log();

// Object destructuring
const {name, age, city} = person2;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York
console.log();

// Object spread operator
const person3 = {...person2};
console.log(person3); // { name: 'John', age: 30, city: 'New York' }
// console.log(person3.name); // John
// console.log(person3.age); // 30
// console.log(person3.city); // New York
// console.log(person3.job); // Developer
console.log();

// Object.keys() method
const keys = Object.keys(person2);
console.log("Keys of person2 object:");
console.log(keys); // [ 'name', 'age', 'city', 'job' ]
console.log();

// Object.values() method
const values = Object.values(person2);
console.log("Values of person2 object:");
console.log(values); // [ 'John', 30, 'New York', 'Developer' ]
console.log();

// Object.entries() method
const entries = Object.entries(person2);
console.log("Entries of person2 object:");
console.log(entries); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ], [ 'job', 'Developer' ] ]
console.log();

// Object.freeze() method
Object.freeze(person2);
person2.name = "Jane";
console.log(person2.name); // John
