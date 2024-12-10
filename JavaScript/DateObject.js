// Create a new Date object with the current date and time
let now = new Date();
console.log(now);

// Create a new Date object with a specific date and time
let specificDate = new Date('2023-10-01T10:20:30Z');
console.log("Specific Date : "+specificDate);

// Get the current year
let year = now.getFullYear();
console.log("Current Year : "+year);

// Get the current month (0-11)
let month = now.getMonth();
console.log("Month (0-11): "+month);

// Get the current date (1-31)
let date = now.getDate();
console.log("Current Date (1-31): "+date);

// Get the current day of the week (0-6)
let day = now.getDay();
console.log("current day of the week (0-6): "+day);

// Get the current hour (0-23)
let hours = now.getHours();
console.log("current hour (0-23): "+hours);

// Get the current minutes (0-59)
let minutes = now.getMinutes();
console.log("current minutes (0-59): "+minutes);

// Get the current seconds (0-59)
let seconds = now.getSeconds();
console.log("current seconds (0-59): "+seconds);

// Get the current milliseconds (0-999)
let milliseconds = now.getMilliseconds();
console.log("current milliseconds (0-999): "+milliseconds);

// Get the time in milliseconds since January 1, 1970
let time = now.getTime();
console.log("time in milliseconds since January 1, 1970 : "+time);

// Set a specific date and time
let newDate = new Date();
newDate.setFullYear(2025);
newDate.setMonth(11); // December (months are 0-11)
newDate.setDate(25);
newDate.setHours(10);
newDate.setMinutes(30);
newDate.setSeconds(15);
console.log("New Set Date : "+newDate);

// Parse a date string
let parsedDate = Date.parse('2023-10-01T10:20:30Z');
console.log(new Date(parsedDate));

// Format a date to a string
let dateString = now.toDateString();
console.log(dateString);

// Format a date and time to a string
let dateTimeString = now.toISOString();
console.log(dateTimeString);