//sync vs Async behviour
//1.DOne  -->Fetch 100 users from the API/DB  ---20Secs
//2.DOne  ---> Display User Profile
//3.DOne
//4.Done
//end

//Blocking behaviour for the user

console.log("start");
for(let i=0; i<3; i++){
    console.log(i);
}
    console.log("end");


//Async
//1.---fetch user --100 users are coming from API/DB  --20secs -->Callback function:Promises
//2.---Display user Profile  ---10secs
//3.---fetch order info --5sec
//4.---Do something else

console.log("start");
setTimeout(()=>{
  console.log("Timeout is Done");
},2000);

