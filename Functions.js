//1.function declaration

function add(a,b){
    return a+b;
}

function print(){
console.log("Hi this is JS");
}

const sum = add(5,6);
console.log(sum);

print();

//2.Function Expression
const multiply = function(x,y){
    return x*y;
}

const mul = multiply(5,6);
console.log(mul);


//3.Arrow function expression:Annonymous function
const divide =(t1,t2) =>t1/t2;

const div = divide(20,2);
console.log(div);

//4.Function Constructor
const substract = new Function('a','b','return a-b;');

const subs = substract(10,2);
console.log(subs);

//5.IIFE (Immediately Invoked Function Expression)

(function(){
    console.log("Server is up and running on port 3000");
})();

//6.Generator Function
//function* and yield keyword
function* generateNumberSequesnce(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = generateNumberSequesnce();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7.Annonymous Function
//no specific name
const numbers = [1,2,3,4,5];
const squareNumbers =numbers.map(function(e){
    return e*e;
})
console.log(squareNumbers);

//Otherway
const numbers1 = [1,2,3,4,5];
const squareNumbers1 =numbers.map((e)=>{
    return e*e;
})
console.log(squareNumbers1);

//8. Recursive Function:4 ->4*3*2*1
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(100));

//9.Higher-Order Function
function addition(a,b){
    return a+b;
}

function multiplication(a,b){
    return a*b;
}

function operate(funcName, a,b){
    return funcName(a,b);
}

const s = operate(addition, 4,5);
console.log(s);

const s1 = operate(multiplication, 4,5);
console.log(s1);

