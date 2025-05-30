const fs = require('fs');

fs.readFile("Doc.txt","utf-8",(error,data)=>{
    console.log(data);
});
console.log("Bye Vineela");

