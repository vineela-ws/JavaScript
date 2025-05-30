    const randomNumberPromise = new Promise((resolve,reject) =>{

    //Async Operation
       setTimeout(()=>{
         const randomValue = Math.random();
          if(randomValue>0.5){
            resolve(randomValue);
          }else{
            reject(new Error("Value is too small!!!!!"));
          }
       },2000);  //Delay of 2 secs
     });

     randomNumberPromise
         .then(result =>{
            console.log("Promise is fulfilled with value:" ,result);
         })
         .catch(error=>{
           console.log("Promise is Rejected with Error:",error);
         });
         