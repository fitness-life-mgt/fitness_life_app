const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;

router.post("/",(req,res)=>{
   console.log('Inside router');
    const desc=req.body.desc;
    const email='cmwick@gmail.com';

 // query for users
 let sqlCheckEmail = `SELECT * FROM member WHERE email = ?`;

 // Simple validation
   if(!desc){
      console.log('Feilds Empty');
      return res.json({msg:"Please add a Description"});
   }

//check for existing user
db.query(sqlCheckEmail,email,(err,user)=>{
   console.log('Inside the sqlCheckEmail');
   if(user.length<1){
      console.log('No User');
        return res.status(400).json({msg:"this user already"});
   }else{
       let sql=`insert into dietplan(email,description) values(?,?)`;
       console.log('Success record');
   {  
   if(err){
      console.log(err)
   }
   db.query(sql,[email,desc],(err,result)=>{
      console.log('Success Querry');
       console.log(err);
   });
   }
   }
   res.json("SUCCESS");
});
});
module.exports=router;