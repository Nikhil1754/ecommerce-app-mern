const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
require("dotenv").config();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/userSchema');
//Using Promises
/*router.post('/register',(req,res)=>{
    const {name,email,paasword}=req.body;
    if(!name || !email || !paasword){
        return res.status(422).send({error:"please fill all the fields"});
    }
    User.findOne({email:email})
    .then((userExist)=>{
            if(userExist){
                return res.status(422).send({error:"Email already exist"});
            }
            const user=new User({
                name,
                email,
                paasword,
            })
            user.save().then(()=>{
                res.status(201).send({message:"user register successfully"})
            }).catch((err)=> res.status(500).send({error:"Failed to register"}));
        }
        ).catch(err=>console.log(err));
})*/

//using Async Await

router.post('/register',async (req,res)=>{
    const {name,phone,email,paasword,cpaasword}=req.body;
    if(!name || !phone || !email || !paasword || !cpaasword){
        return res.status(422).json({error:"please fill all the fields"});
    }
    try {
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({msg:"Email already Exist"});
        }
        const user=new User({name,email,phone,paasword,cpaasword});
        if(paasword==cpaasword){
            const userRegister=await user.save();
            if(userRegister){
                res.status(201).json({msg:"User Registerd Successfully"});
                console.log(userRegister);
            }
           
            else{
                res.status(500).json({error:"Failed to register"});
            }
        }
        else{
            res.status(500).json({error:"Password and Confirm Password not matched"});
        }
        
        

    } catch (error) {
        console.log(error);
    }
})
router.post('/login',async (req,res)=>{
    try {
        const {email,paasword}=req.body;
        if(!paasword || !email){
            res.status(422).json({msg:'pleaze fill all info'});
        }
        const userExist=await User.findOne({email:email});
        if(!userExist){
            
            res.status(400).json({msg:"user not find pz register"});
        }
        else{
            const isMatch=await bcrypt.compare(paasword,userExist.paasword)
            const token= await userExist.generateAuthToken();
            if(isMatch){
                res.status(201).json({msg:"user login succesffull"});
            }
            else{
                res.status(400).json({msg:"password does,t match"});
            }
     }
        
    } catch (error) {
        console.log(error);
    }
})
module.exports=router