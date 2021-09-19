const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;

router.post("/",(req,res)=>{
   console.log('Inside router');
    const appdate=req.body.appdate;
    const apptime=req.body.apptime;
    const trainer=req.body.trainer;
    const email='cmwick@gmail.com';

 // query for users
 let sqlCheckEmail = `SELECT * FROM member WHERE email = ?`;

 // Simple validation
   if(!appdate||!apptime||!trainer){
      console.log('Feilds Empty');
      return res.json({msg:"Please fill all the Fields"});
   }

//check for existing user
db.query(sqlCheckEmail,email,(err,user)=>{
   console.log('Inside the sqlCheckEmail');
   if(user.length<1){
      console.log('No User');
        return res.json({msg:"No user from this Email"});
   }else{
       let sql=`insert into appointment(email,date,time,trainerID) values(?,?,?,'3')`;
       console.log('Success record');
   {  
   if(err){
      console.log(err)
   }
   db.query(sql,[email,appdate,apptime,trainer],(err,result)=>{
      console.log('Success Querry');
       console.log(err);
   });
   }
   }
   res.json("SUCCESS");
});
});
module.exports=router;