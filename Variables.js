//1.Var old way
//ES6
//Scope:Var
//functionally/Locally+global Scope


var x =10;
function test(){
    var y =20;
}
console.log(x)

var pop = "hi js";
function rel(){
    var top = "Hello Js";
    console.log(top);
}
rel();

console.log("....................................................");

var broswer = 'Chrome';
var broswer = 'Firefox';
    browser = 'edge';

console.log(broswer);

console.log("....................................................");
var g;
console.log(g);  //Undefined

g = "Hello World";
console.log(g);

//Issue with var:

var flag = "Hey Vineela";
var t1   =  4;

if(t1>3){
    var flag = "tom";
}

console.log(flag);

//let:
//scope: block scoped
//{}

let m = "Hey Vineela";
let time =4;

if(time>3){
    let mesg = "hey Hw r u?"
    console.log(mesg)
}
    console.log(m)

    console.log("....................................................");

let len1 =4;
    len1 =5;

    console.log(len1);

//Const
const mg = "Hey Town";
console.log(mg);

const days =7;
console.log(100*days);

let j;
console.log(j);















