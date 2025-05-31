function getEvenNumber(value,delay){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value%2 ==0){
                resolve(value);
            }else{
                reject(new Error("Value is not even number"))
            }

        },delay);
    });
}

//Promise Chain
getEvenNumber(4,1000)
  .then(result =>{
    console.log("Step1: getting the result with even number:", result);
    return getEvenNumber(6,2000);
  })
  .then(result => {
     console.log("Step2: getting the result with even number:", result);
  })
  .catch(error => {
    console.error("Promise Chain Error:", error);
  });
  
  