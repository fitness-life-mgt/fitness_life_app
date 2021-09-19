const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;

// login
router.post("/",(req,res)=>{
    console.log('Inside router');
    const email =req.body.email;
    const password =req.body.password;
    //validation
    if (!email || !password) {
        console.log('Feilds Empty');
        return res.status(400).json({ msg: "Please enter all fields" });
      }

      
    //sql for user
    let sqlCheckEmail=`SELECT *FROM member WHERE email=?`;

   
    //check for existing user
    db.query(sqlCheckEmail,email,(err,member)=>{
        if(member.length<1){
          console.log('No User');
            return res.json({msg:"Email Does not Exists!"});
        }else{
            let currentUser = member[0];

            // Validate password
            bcrypt.compare(password, member[0].password).then(isMatch => {
              if (!isMatch){
                console.log('Wrong credentials');
                return res.json({ msg: "Incorrect Password!" });
              }else{
                console.log('Success');
                res.json("SUCCESS");
              }
              const test={
                  username:"rashan",
                  id:1
              }
              jwt.sign({member:member},"mysecretkey",(err,token)=>{
                          res.json({token:token})
              })


            });


        }
        
    });
});

module.exports=router;