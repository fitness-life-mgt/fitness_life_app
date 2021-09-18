const express =require('express');
const router = express.Router();
const db=require("../config/connection");


router.get("/",(req,res)=>{

    let sql= `SELECT workout.workoutName AS wname, workout.description AS wdesc, 
    workout.duration AS wdur, workout.image AS wimage FROM workout JOIN programworkout 
    ON workout.workoutID = programworkout.workoutID
    WHERE programworkout.programID = 3 `;
   db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
   });
});

module.exports=router;   