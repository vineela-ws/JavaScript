//Case 1:

//f1-resolve
//f2-resolve
//f3-resolve

const function1 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            //resolve("Data from function1")
            const data = [1,2,3,4,5];
            resolve(data);
        },2000);
    });
};

const function2 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            //resolve("Data from function2")
            const data = [6,7,8,9,10];
            resolve(data);
        },2000);
    });
};

const function3 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            //resolve("Data from function3")
            const data = [11,12,13,14,15];
            resolve(data);
        },2000);
    });
};


Promise.all([
    function1(),
    function2(),
    function3()
])
.then(dataArray =>{
    console.log("All data from diff functions:",  dataArray);
})
.catch(error =>{
   console.log('Error in Promise', error)
});



//Case 2
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

Promise.all([
    getData(),
    getError()
])
.then(dataArray =>{
    console.log("All data fetched:", dataArray);
})
.catch(error =>{
   console.log('Error occured', error)
});