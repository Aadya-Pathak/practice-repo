console.log("Main.js is loaded and running.");
alert("Hello from main.js!");
console.warn("This is a warning");
alert("This is an alert from main.js");
//let,const, var(not used anymore since its global scope)
const a=30;
console.log(a);
//strings,numbers,boolean,null,undefined,symbol
const name="Aditya";
const age= 30;
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