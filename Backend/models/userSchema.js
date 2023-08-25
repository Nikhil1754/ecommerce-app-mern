const mongoose= require('mongoose');
const bcrypt=require('bcrypt');
const { hash } = require('bcrypt');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    
    paasword:{
        type:String,
        required:true,
    },
    cpaasword:{
        type:String,
        required:true,
    },
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]

})

//encrypt passwordd using bcrypt
userSchema.pre('save',async function(next){
    if(this.isModified('paasword')){
        this.paasword=await bcrypt.hash(this.paasword,12)
        this.cpaasword=await bcrypt.hash(this.cpaasword,12)
    }
    next();
})

//We Are Generating Token
userSchema.methods.generateAuthToken=async function(){
    try {
       let token=jwt.sign({_id:this._id},process.env.SECRET_KEY); 
       this.tokens=this.tokens.concat({token:token});
       await this.save();
       return token;
    } catch (error) {
        console.log(error);
    }
}
const User=mongoose.model('USER',userSchema);
module.exports=User;