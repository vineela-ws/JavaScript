//Promise.AllSettled();

//Behaviour --
//It returns a single promise that is fullfilled with an array of result objects, one for each promise
//Each result Object Contains
//a status (either ="Fulfilled" or "Rejected") and
//a value (Fulfilled Value) or reason (Rejection Reason).

//UseCase
//Usefull when you want Process All Promises, whether they succeed or fail
//and you want to gather information about the outcome of each promise.


//Case 
//resolved
//rejected

const getData = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Data from getData")
        },2000);
    });
};

const getError = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("Data is not available from getError")
        },2000);
    });
};

Promise.allSettled([
getData(),
getError()
])
.then(dataArray =>{
    console.log("All data fetched:", dataArray);
})
.catch(error =>{
   console.log('Error occured', error)
});

