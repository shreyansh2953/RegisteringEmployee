const express = require('express');
const router = express.Router();
const employeeModel =  require('../model/employee.model');
const mongoose = require('mongoose')

// to get all employee data from our database
router.get('/list',(req,res)=>{
   employeeModel.find((err,data)=>{
       if(err)
       {
                console.log(err)
       }
       else
       {
        
          employeeModel.count((err,number)=>{

               res.send({count : number,data :data});
           })
       }
   })
})
// GETTING CUSTOMER THROUGH ID
router.get('/view/:id',(req,res)=>{
    employeeModel.findById(req.params.id,(err,data)=>{
        if(err)
        {
            res.send({status:500,message : "unable to find"});
        }
        else{
            res.send(data);
        }

    })
})
// updating data
router.put('/update/:id',(req,res)=>{

  userid = req.params.id;
    const employeeObj = {
        name : req.body.name ,
        office : req.body.office,
        position : req.body.position,
        salary : req.body.salary
    }

    employeeModel.findByIdAndUpdate(userid,employeeObj,(err,data)=>{
        if(err)
        {
            res.send({status:500,message : "unable to update"});
        }
        else{
            res.send(data);
        }
    })

})
// deleting items from database
router.delete('/delete/:id',(req,res)=>{
    let userid = req.params.id;
    
    employeeModel.findByIdAndDelete(userid,(err,data)=>{
        if(err)
        {
            res.send({status:500,message : "unable to delete"});
        }
        else{
            res.send({message:"deleted sussecfully"});
        }
    })
})

// to add
router.post('/add',(req,res)=>{
    let emp = new employeeModel({
        name :req.body.name,
    position : req.body.position,
    office : req.body.office,
    salary : req.body.salary
    })
    emp.save((err,emp)=>{
        if(err)
        {
            res.send({status:404,message:"not loaded"})
        }
        else{
            res.send({status:200,message:"added succesfully!!",empdetail:emp})
        }
    })
})


module.exports = router;