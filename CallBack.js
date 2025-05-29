//Callback Function
//Async call/task --Once this task is completed --Then only call back fucntion will be called

//Basic Callback
function greet(name,Callback){
    console.log('Hello' + name);  //normal/sync step/task, could be aync call/api
    Callback();
}

function welcome(){
    console.log('Welcome!!!!')
}

greet('Vineela',welcome);


console.log("-----------------------------------------------------------------")

//CallBack with Async function:

function printInfo(name,Callback){

 //Async function/task/step

   setTimeout(function(){
    console.log("Printing Info for  " +name);
    Callback("Please call me back---")
   },1000); //Delay of 1 sec
}

//callback
function displayMessage(mesg){
    console.log(mesg);
}

printInfo("Lisa",displayMessage);

console.log("-----------------------------------------------------------------")

function fetchUserData(userId,callback){
    setTimeout(function(){
        const users = {
            1:{id: 1, name:"Vineela"},
            2:{id:2, name:"Tom"}
        };
        const user = users[userId]
        if(user){
          callback(null,user)
        }else{
          callback("user not Found....",null)
        }
    },2000)
}

//callback function:
function handleUserData(error,user){
    if(error){
        console.error("Error:",error);
    }else{
        console.error("User:" , user);
    }
}

 fetchUserData(2,handleUserData);