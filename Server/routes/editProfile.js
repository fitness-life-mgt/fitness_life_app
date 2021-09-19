const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;

router.post("/",(req,res)=>{
    
    // const telephone=req.body.telephone;
    const oldpassword=req.body.oldpassword;
    const password=req.body.password;
    const cpassword=req.body.cpassword;
    
  // Simple validation

    if( !oldpassword||!password||!cpassword){
        return res.json({msg:"Please fill all the feilds"});

    }

    if(password!==cpassword){
        return res.json({msg:"New Passwords Do Not Match!"});
    }

        let sql=`UPDATE member SET password = ?  WHERE email = '123' `;
 bcrypt.hash(password,saltRounds,(err,hash)=>{  

    if(err){
       console.log(err)
    } 
    
    db.query(sql,[hash],(err,result)=>{
        console.log(err);
    });
})
    
    res.json("SUCCESS");
});

module.exports=router;