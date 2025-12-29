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
const c = null;
const b = undefined;
let z;
console.log(typeof z);

//concatenation
console.log("My name is " + name + " and I am " + ag); 

//template string
console.log(`My name is ${name} and I am ${ag}`);

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

//for loops
for(let i=0;i<10;i++){
    console.log("for loop number: ${i}");}

//while loop
let i=0;
while(i,10){
    console.log("while loop number is: $(i)");
i++;}

//for..of
for(let todo of todos){
    console.log(todo.text);
}

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});
const todoText= todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
const todoCompleted= todos.filter(function(todo){
    return todo.isCompleted===true;
});
console.log(todoCompleted);

//conditionals
const x='10';
if(x==10){
    console.log('x is 10');
}
if(x===10){
    console.log('x is strictly 10');
}
const y='20';
if(x>5 && y>15){
    console.log('x is more than 5 and y is more than 15');
}

//ternary operator
const color= x===10 ? 'red' : 'blue';
console.log(color);

//switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

//functions
function addNums(num1=1,num2=1){
    return num1+num2;
}
console.log(addNums(5,5));
console.log(addNums());

//arrow functions
const addNums2=(num1=1,num2=1)=> num1+num2;
console.log(addNums2(10,10));
console.log(addNums2());

//functions with multiple lines
function personInfo(person){
    return `${person.firstName} is ${person.age} years old.`;
}

//constructor function
function Person(firstName,lastName,age){
    this.firstName= firstName;
    this.lastName= lastName;
    this.age= age;
}
const person1= new Person('Aditya','Waghmare',30);
const person2= new Person('Luigi','Mangione',25);
console.log(person1);
console.log(person2);

