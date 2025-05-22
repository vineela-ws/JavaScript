//1.every()

let num= [1,2,3,4,5];
let flag =num.every((e) =>e<10);
console.log(flag);

//2.some()

let number= [1,2,3,4,5];
let flag1 = number.some((e) =>e>20);
console.log(flag1);


//3.find()
let total= [1,2,3,4,5];
let fe = total.find((e) =>e%2===0);
console.log(fe);


//4.indexOf()
let arry = ['Apple','banana','Mango','pear'];
let index = arry.indexOf('banana');
console.log(index);


//5.lastIndexOf()
let fruits = ['Apple','banana','Mango','pear','Apple'];
let lastApple =fruits.lastIndexOf('Apple');
console.log(lastApple);

//6.reverse()
let fruit = ['Apple','banana','Mango','pear'];
let rev = fruit.reverse();
console.log(rev);

//7.sort()
let fru = ['Apple','banana','Mango','pear'];
let sort = fru.sort();
console.log(sort);
