//Pyramid of doom or "Callback hell"

asyncFunction1((result1)=>{
    asyncFunction2(result1,(result2)=>{
        asyncFunction3(result2,(result3)=>{
            asyncFunction3(result3,(result4)=>{
                //More nested callbacks

   });
  });
 });
});


//Better readability with Promises
asyncFunction1()
.then(result1 => asyncFunction2(result1))
.then(result2 => asyncFunction2(result2))
.then(result3 => asyncFunction2(result3))
.then(result4 => {
   //code here
})
.catch(error =>{
    //Error Handling
})


//or using async-await :
async function myFunction(){
    try{
        const result1 = await asyncFunction1(); //5secs
        const result2 = await asyncFunction2(result1); 
        const result3 = await asyncFunction3(result2); 
        const result4 = await asyncFunction4(result3); 
        //code here
    }catch(error){
        //Error Handling
    }
    
}

