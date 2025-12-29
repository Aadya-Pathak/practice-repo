console.log("Main.js is loaded and running.");
alert("Hello from main.js!");
console.warn("This is a warning");
alert("This is an alert from main.js");
//let,const, var(not used anymore since its global scope)
const a=30;
console.log(a);
//strings,numbers,boolean,null,undefined,symbol
const name="Aditya";
const ag= 30;
const isCool= true;
const rating=4.5;
const x = null;
const y = undefined;
let z;
console.log(typeof z);
//concatenation
console.log("My name is " + name + " and I am " + age); 
//template string
console.log(`My name is ${name} and I am ${age}`);
//string methods
const s="Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toLowerCase());
console.log(s.split(''));
const h="technology, computers, it, code";
console.log(h.split(', '));
//arrays - variables that hold multiple values
const numbers=new Array(1,2,3,4,5);
console.log(numbers);
const fruits=['apples','oranges','pears',10,true];
console.log(fruits);
console.log(fruits[1]);
fruits[5]='grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();//remove last
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits);
//object literals
const person= { firstName:'Luigi', 
    lastName:'Mangione',
    age: 25,
    hobbies:['music','movies','sports']
}
console.log(person);
console.log(person.hobbies[1]);
const{ firstName, lastName, age}= person;
console.log(firstName, lastName);
person.email='luigimangione@gmail.com';
console.log(person);
const todos=[ { id:1,
    text:'Take out trash',
    isCompleted: true
},
{
    id:2,
    text:'Meeting with boss',
    isCompleted: true  
},
{    id:3,
    text:'Dentist appt',
    isCompleted: false
}];
console.log(todos);
console.log(todos[1].text);
const todoJSON= JSON.stringify(todos);
console.log(todoJSON);
//add properties