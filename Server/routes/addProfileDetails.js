const express =require('express');
const router = express.Router();
const db=require("../config/connection");
const jwt =require("jsonwebtoken");
// const bcrypt=require('bcrypt');
// const  saltRounds=10;

console.log("OutSide Router");

router.post("/",(req,res)=>{
    
    const telephone=req.body.telephone;
    const address=req.body.address;
    const height=req.body.height;
    const weight=req.body.weight;
    const age=req.body.age;

    console.log("Inside Router!");
  // Simple validation

    if( !telephone||!address||!height||!weight||!age){
        console.log("Empty Feilds!");
        return res.json({msg:"Please fill all the Fields"});

    }

    let sql=`UPDATE member SET telephone = ?, address = ?, height = ?, weight = ?,
    age = ?  WHERE email = 'cmwick@gmail.com' `;
    {  

    db.query(sql,[telephone,address,height,weight,age],(err,result)=>{
        console.log("Success");
        console.log(err);
    });
}
    
    res.json("SUCCESS");
});

module.exports=router;