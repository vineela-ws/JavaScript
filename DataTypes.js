let name = "Vineela";
let age =5;
let color ='red';

console.log(name);

const numberOfDays = 7;
console.log(numberOfDays);

let num =30;
let flag = true;

let isActive = false;

let price;

let model = null;

let wheels = undefined;

let salary =12.33;

//Objects

let user = {
    name: "TOM",
    age:30
};

console.log(user);

//1.DOt Notation
console.log(user.name);
console.log(user.age);

user.age =35;
console.log(user.age);

console.log(user.name+' '+user.age);

//2. Using Bracket Notation
user['name'] = 'Mary';
console.log(user.name);

//Arrays
//List Of Objects

let language = ['Java','JavaScript'];
console.log(language);
console.log(language.length);

language[2] ='Ruby';

console.log(language);
console.log(language.length);

console.log(language[0]);

//functions
console.log('hello!!');

function getName(){
    console.log('This is my function');
}

//Call the function
getName();

//Param based functions
function greet(name,age){
    console.log('hello ' +name);
}

greet('Naveen',24);
greet('tom');
greet();

//return from function
function add(num1,num2){
    return num1+num2;
}

let sum = add(10,20);
console.log(sum);

console.log(40,50);

function squareRoot(number){
    let root = number*number;
    return root;
}

console.log(squareRoot(2));












