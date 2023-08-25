const express=require("express");
const port=5000;
const app=express();
const bodyParser=require('body-parser');


require('./connection');
require("./models/userSchema");
const authRoutes=require('./router/Auth');

app.use(bodyParser.json());
app.use(authRoutes);
app.get('/',(req,res)=>{
    res.send("This is HomePage");
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
