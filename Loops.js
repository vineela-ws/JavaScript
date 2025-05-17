//for /while /do-while /for...in/for...of 

//Infinite loop
console.log('Hello World');

for(let i=1; i<=10; i++){
    console.log(i);
       if(i%2===0)
          console.log('Hi this is Java Script')
}

//While
let i=1;
  while(i<=10){
     console.log(i);
       i++;
  }

  //Do-while
  let p=1;

  do{
     console.log(p);
     p++;
  } while (p<=10);

  //For...in
  //For Objects

  const persons = {
    name: 'Naveen',
    age:  '25'
  };

  for(let key in persons)
      console.log(key, persons[key]);

  //Array:

  const colors = ['red', 'green', 'blue']
    
    for(let index in colors){
         console.log(index, colors[index]);
    }

//for-of
//is used to get the values form Array 
  const colors1 = ['red', 'green', 'blue']
   for(let i of colors)
        console.log(col);


//break and continue
let k=0;
while(k<=10){
   if(k===5){
      break;
       console.log(k);
        k++;
   }
}











