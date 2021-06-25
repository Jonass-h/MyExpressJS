const express=require("express");
const app = express();

app.get('/', (req,res)=>{
    let client={
       name:"younes",
       age:22
    };
    res.send(client);
})

app.listen(3000);