const fs = require('fs')
const user_Name = 'Sharif'
console.log(user_Name)

fs.writeFile('user-data.txt', 'Name: ' +user_Name,(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Wrote File")
})