const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;

router.post("/",(req,res)=>{
    const appdate=req.body.appdate;
    const apptime=req.body.apptime;
    const hours=req.body.hours;
    const email=req.body.email;

 // query for users
 let sqlCheckEmail = `SELECT * FROM user WHERE email = ?`;

 // Simple validation
   if(!appdate||!apptime||!hours||!email){
       return res.status(400).json({msg:"Please enter all fields"});
   }

//check for existing user
db.query(sqlCheckEmail,email,(err,user)=>{
   if(user.length>0){
        return res.status(400).json({msg:"this user already"});
   }else{
       let sql=`insert into appointment_requests(date,time,no_of_hours,email) values(?,?,?,?)`;
bcrypt.hash(password,saltRounds,(err,hash)=>{  
   if(err){
      console.log(err)
   }
   db.query(sql,[appdate,apptime,hours,email],(err,result)=>{
       console.log(err);
   });
})
   }
   res.json("SUCCESS");
});
});
module.exports=router;