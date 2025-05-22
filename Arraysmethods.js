//1.Map
let numbers =[1,2,3]

let doubleNumbers = numbers.map((e)=> e*2);
console.log(doubleNumbers);

//F --->c
//(F-32)*(5/9)

let fahTemp = [32,68,86,104,212]

function fahToCell(fah){
    return (fah-32)*(5/9)
}

let cellTemp = fahTemp.map(fahToCell);
console.log(cellTemp);

//2.Filter 

let num = [1,2,3,4,5,6,7,8,9,10];
let evenNumber =num.filter((e)=>e%2===0);
console.log(evenNumber);

let employee = [
  {name:"John", age:30, gender:"male"},
  {name:"Bob", age:35, gender:"male"},
  {name:"Lisa", age:40, gender:"Female"},
  {name:"Priya", age:25, gender:"Female"},
  {name:"Peter", age:55, gender:"male"},
];

let femaleEmpOver30 = employee.filter((emp)=>{
    return emp.gender === "Female" && emp.age>30;
});
console.log(femaleEmpOver30);

//3.Reduce

let numb = [1,2,3,4,5];  //15
let sum = numb.reduce((acc,num)=>acc+num,0);
console.log(sum);

//max number in the Array 
let top = [10,5,25,8,30,15]  //30
top.reduce((max,num) =>{
   if(num>max){
    return num;
   }else{
    return max;
   }
},top[0]);

//cart :name,price

let cartItems = [
    {name:"Jeans",price:500},
    {name:"Shirt",price:200},
    {name:"Sheos",price:1000},
    {name:"Hat",price:100},
    {name:"Tshirt",price:400},
]

let totalCost = cartItems.reduce((total,item) =>total+item.price,0);
console.log(totalCost);



