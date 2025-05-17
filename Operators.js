//Arithmatic
//Assignment
//Ternary
//Comparison
//Logical
//Bitwise

//Arithmatic
let x = 10;
let y = 20;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(y/x);

console.log(x ** y);

//++ and --
let p=1;
let q=p++;
console.log(p);
console.log(q);

let p1=1;
let q1=++p;
console.log(p1);
console.log(q1);

let m =2;
console.log(m--);
console.log(m);


//Assignement Operators
let x1 =10;
let c = x1+10;
console.log(x1+c);

x1 = x1*10;
console.log(x);

let j =5;
j+=5;
console.log(j);

//Comparison
let n=10;
console.log(n>=10);
console.log(n===10); 

 //Strict Equality type and value
 console.log(1===1);

//lose Equality value

 console.log('1'==1);
 console.log(1==1);
 console.log(true==1);

 //Ternary

 let points =110;
 let type = points >100  ? 'gold': 'Silver';

 console.log(type);

 //Logical

 //And(&&)

 let highIncome = true;
 let goodCreditScore = true;

let eligibleForLoan = highIncome &&goodCreditScore;

console.log(eligibleForLoan);

//Not(!)

let isActive =true;
console.log(!isActive);

//Logical Operators with Non -boolean
//falsy false
//undefined
//null
//0
//false
//''
//NaN

//Truthy values which are not falsy
console.log(false || 'Vineela');
console.log(false || 0);
console.log(false || 1 || 2);
console.log(true || 1 || 2);
console.log(false || undefined);
console.log(false || null);

//Real Time example
let userColor = 'red';
let defaultColor = 'blue';

let currentColor = userColor || defaultColor;

console.log(currentColor);

//Bitwise
//1 -00000001
//2 -00000010
//3 -00000011

console.log(1 | 2);  // 3
console.log(1 & 2);  // 0

//Operator Precedence
console.log(2+3*4);
console.log((2+3)*4);

//Swap 2 values
let a = 10;
let b = 20;

console.log(a);
console.log(b);

let d =a;
a=b;
b=c;

console.log(a);
console.log(b);








































