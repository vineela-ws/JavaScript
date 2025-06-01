//It's used for handling multiple promises and resolving with the value of the first fulfilled/resolved promise ,similar to Promise.race()
//However, unlike Promise.race(), Promise.Any() doesn't reject immediately when the first promise rejects;
//Instead it waits until atleast one promise fulfills/resolved.


const getMessage = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("get message from API 1")
        },500);
    });
};

const getUsers = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("Error: user data couldn't be fetched ")
        },200);
    });
};

const getProducts = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("Error: Product data couldn't be fetched ")
        },1000);
    });
};

//Use Promise.any()
Promise.any([
    getMessage(),
    getUsers(),
    getProducts()
])
.then(result => {
    console.log("Result :",result);  //Will log the first resolved promise result
})
.catch(error=>{
    console.log("Error:",error);  //Will log all rejection reasons if all promisses reject
});