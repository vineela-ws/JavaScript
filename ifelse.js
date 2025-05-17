let hour = 10;

if(hour>=6&&hour<12){
 console.log('Good Morning')
}
else if(hour>=12&&hour<=18){
  console.log('Good Afteroon')
}else{
      console.log('Good Evening')
}

//Wap to findout the max number
let a = 400;
let b = 200;
let c = 300;

if(a>b && a>c)  console.log('a is greatest')
  else if(b>c)   console.log('b is greatest')
   else          console.log('c is greatest')



let role = guest;
switch(role){
  case 'guest':
    console.log('guest user');
    break;

  case 'admin':
    console.log('admin user');
    break;

  case 'Vendor':
    console.log('no user');
    break;
}

//Role with if else 

if(role ==='guest')  console.log('guest user');
  else if(role ==='admin')  console.log('admin user');
       else console.log('no user');

