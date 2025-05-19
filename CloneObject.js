const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
}

//for in loop
const another = {};
console.log(another);
for(let key in circle)
    another[key] = circle[key];
    console.log(another);


console.log('....................................');

//2.using Object.assign method

const another1 = Object.assign({},circle);
console.log(another1);

console.log('....................................');

       const another2 =  Object.assign({
                color:'red'},circle);
       console.log(another2);  
       another2.draw();

console.log('....................................');

//3.Using Spread.... operator
const another4 = {...circle};
console.log(another4);
another4.draw();


