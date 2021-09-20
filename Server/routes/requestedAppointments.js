const express =require('express');
const router = express.Router();
const db=require("../config/connection");


const getCurrentDate=()=>{

     var date = new Date().getDate();
     var month = new Date().getMonth() + 1;
     var year = new Date().getFullYear();
 
     //Alert.alert(date + '-' + month + '-' + year);
     // You can turn it in to your desired format
     return year + '-' + month + '-' + date;//format: yyyy-mm-dd;
 }
 var currentDate = getCurrentDate();



router.get("/",(req,res)=>{

     let sql= `SELECT trainer.firstName AS fname,trainer.lastName AS lname, 
     appointment.date AS adate ,appointment.time AS atime , appointment.zoom 
     AS azoom FROM trainer JOIN appointment ON appointment.trainerId = trainer.trainerId 
     WHERE appointment.type =0 AND appointment.email = 'cmwick@gmail.com' AND appointment.date > '2021-09-21' 
     ORDER BY appointment.date`;
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
   });
});

module.exports=router;   