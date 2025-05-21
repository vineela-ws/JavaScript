//Declaration of an Array

let myArray = [];  //An empty array
let numbers = [1,2,3,45];

//1.Push
let lang = ["Java","Python","JS"];
lang.push("Ruby","HTML");
console.log(lang);

//2.POP
let numbers1 = [1,2,3,4,5];
numbers.pop();
console.log(numbers);

//3.Shift
let fruits = ["apple","banana","orange"];  //An array with strings
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

//4.UnShift
let colors = ['red','green','black','white'];  //An array containing two elements 
colors.unshift('blue','pink');
console.log(colors);
console.log(colors.length);

//5.Splice
let animals = ['dog','cat','bird','fish'];  //Array contain four string values
animals.splice(1,2,'bear','elephant');
console.log(animals);

6.//Slice 
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,4);
console.log(newPop);

7.//Concat
let fr = ["apple","banana","orange"];  //An array with strings
let num = [1,2,3,4,5];

let mixedArray = fr.concat(num);
console.log(mixedArray);

8.//IndexOf 
let color = ["Yellow","red","green","blue","red"];
let indexRed = color.indexOf("red");
console.log(indexRed);

let vinIndex = color.indexOf("Vineela");
console.log(vinIndex);

//2nd Red Index
let redSecondIndex = color.indexOf("red",color.indexOf("red")+1);
console.log(redSecondIndex);

//9.includes
let test = ["admin","Customer","seller","vendor"];
let flag = test.includes("seller","vendor");
console.log(flag);

//10.forEach
let n = [1,2,3,4,5,6,7];
n.forEach((e) =>{
    console.log(e*2);
})


















