//1.Find unique values from Array
const array = [1,2,3,2,4,6,6];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

//2.int to String
const num = 32;
const numStr = num +'';
console.log(numStr);

//or
const numStr1 = String(num);
console.log(numStr1);

//3.Float to int
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);

//4.Check if variable in number
const value = 56;
if(typeof value === 'number' && !isNaN(value)){
    console.log(value + 'is a Number');
}
else{
    console.log(value + 'is not a Number');
}

//5.Swap variable values
let a = 5;
let b = 10;

[a,b] = [b,a]
console.log(a,b);


//6.Check if an Object as a Property
const person = {
    name: 'John',
    age: 28
}

if(person.hasOwnProperty('name')){
    console.log('Person has own proeprty')
}

//7.Remove fancy value from the Array:(false,0,"",null,undefined,Nan)
const values = [0,1,false,2,"",3,null,undefined,NaN,4];
const newVal = values.filter(Boolean);
console.log(Boolean);

//8.String Uppercase and Lowercase
const str = "Studios";
const u1 = str.toUpperCase();
const u2 = str.toLowerCase();
console.log(u1);
console.log(u2);

//9.Check if array contains value
const lang = ['Java','JavaScript','Python','Ruby'];
if(lang.includes('JavaScript')){
    console.log('found');
}

//10.Check if an array is Empty
const empty = [];
if(empty.length === 0){
    console.log("Array is Empty");
}

//11.Generate a random number
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random()*(max-min+1))+min;
console.log(`randomNumber:${randomNumber}`);

//12.String to Number
const strNumber = '32';
const x1 = parseFloat(strNumber);
console.log(x1);

//13.Join Array elements into a String
const words = ['Hello','Vineela'];
const sentence = words.join(' ');
console.log(sentence);

//14.Get Object Property
const user = {
    name:'Tom',
    age:25,
    dob:'01-01-1995'
};

console.log(user['name']);
console.log(user['age']);
console.log(user['dob']);

//15.Clone an Array or Object
const marks = [10,20,30,50,66,70];
const marksDuplicate = [...marks];
console.log(marksDuplicate);
const userDuplicate = {...user}; //Spread Operator
console.log(userDuplicate);

//16.Convert Object to Array
const employee = {
    name:'Tom',
    age:25,
    dob:'01-01-1995'
};

//a.keys array:
const keysArray = Object.keys(employee);
console.log(keysArray);

//b.Value Array
const valuesArray = Object.values(employee);
console.log(valuesArray);

//c.key-value Array
const keyValArray = Object.entries(employee);
console.log(keyValArray);

//17.Get current and time
const currentDate = new Date();
console.log(currentDate.toLocaleString());

//18.Check variable is defined
let i;

if(typeof i === 'undefined'){
    console.log('Variable not defined')
}

//19.Truncate an Array
const testing = [0,1,2,3,4,5,6,7];
testing.length = 3;
console.log(testing);

//20.Last Item an Array
const pop = [0,1,2,3,4,5,6,7];
const n1 = pop.slice(-1);
console.log(n1);








