const firstName = 'Denis';
const lastName = 'Kalinchacha';
const age = 30;
const str = 'Hello my name Denis';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value = value + ' I am' + age;

value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];


value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);
console.log(value);