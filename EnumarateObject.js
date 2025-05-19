//Enumerating Properties of an Object
//Get all the properties of an Object

const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }

};

//1.for-in loop:
for(let key in circle)
    console.log(key, circle[key]);

    console.log('.........................');

//for-of loop:
for(let key of Object.keys(circle))
    console.log(key);

    console.log('.........................');

for(let entry of Object.entries(circle))
    console.log(entry);

//3.In Operator
//Check a Property in an Object

    console.log('.........................');


if('price' in circle)
    console.log('yes')

     console.log('.........................');



if('draw' in circle)
    console.log('yes')

