const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
const  saltRounds=10;

const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return year + '-' + month + '-' + date;//format: yyyy-mm-dd;
}
var currentDate = getCurrentDate();
// console.log(currentDate);

router.post("/",(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const password=req.body.password;
    const cpassword=req.body.cpassword;
  
  // query for users
  let sqlCheckEmail = `SELECT * FROM member WHERE email = ?`;

  // Simple validation
    if(!fname||!lname||!email||!password||!cpassword){
        return res.json({msg:"Please fill all the Fields"});
        // return res.status(400).json({msg:"Please enter all fields"});
    }
    if(password!==cpassword){
      return res.json({msg:"Passwords do not Match"});
    }
//check for existing user
db.query(sqlCheckEmail,email,(err,user)=>{
    if(user.length>0){
         return res.json({msg:"User Already Exists"});
    }else{
        let sql=`insert into member(firstName,lastName,email,password,createdAt,memberType) values(?,?,?,?,?,'0')`;
 bcrypt.hash(password,saltRounds,(err,hash)=>{  
    if(err){
       console.log(err)
       return res.json({msg:"Error while Registering. Please Retry!"});
    }
    db.query(sql,[fname,lname,email,hash,currentDate],(err,result)=>{
        console.log(err);
    });
})
    }
    res.json("SUCCESS");
});
});
module.exports=router;