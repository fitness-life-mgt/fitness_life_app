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
    const hours=req.body.hours;
    const email='abc';

 // query for users
 let sqlCheckEmail = `SELECT * FROM user WHERE email = ?`;

 // Simple validation
   if(!appdate||!apptime||!hours||!email){
      console.log('Feilds Empty');
       return res.status(400).json({msg:"Please enter all fields"});
   }

//check for existing user
db.query(sqlCheckEmail,email,(err,user)=>{
   console.log('Inside the sqlCheckEmail');
   if(user.length<1){
      console.log('No User');
        return res.status(400).json({msg:"this user already"});
   }else{
       let sql=`insert into appointment_requests(date,time,no_of_hours,email) values(?,?,?,?)`;
       console.log('Success record');
   {  
   if(err){
      console.log(err)
   }
   db.query(sql,[appdate,apptime,hours,email],(err,result)=>{
      console.log('Success Querry');
       console.log(err);
   });
   }
   }
   res.json("SUCCESS");
});
});
module.exports=router;