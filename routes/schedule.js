const express = require("express")
const bcryptjs= require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()
const mongoose = require('mongoose')
//const scheduleModel = require('../models/scheduleModel.js')
const classModel = require('../models/classModel')

var clss=undefined;
router.post('/',function(req,res){
    classModel.findOne({_id:req.body.classroomid})
    .select("standard")
    .exec()
    .then(users=>{
        clss=users.standard
    })   
    .then(()=>{
        if(clss===1){
            res.json({
                "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["Maths","Science","English","Hindi","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        
                    ]
                })
            }
            if(clss===2){
                res.json({
                    "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }
                    ]
                })
                    
            }  
            if(clss===3){
                res.json({
                    "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }
                    ]
                })
                    
            } 
            if(clss===4){
                res.json({
                    "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }
                    ]
                })
                    
            } 
            if(clss===5){
                res.json({
                    "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }
                    ]
                })
                    
            } 
            if(clss===6){
                res.json({
                    "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }
                    ]
                })
                    
            } 
            if(clss===7){
                res.json({
                    "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }
                    ]
                })
                    
            } 
            if(clss===8){
                res.json({
                    "Class":[
                        {
                            "day": "Monday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Tuesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Wedndesday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Thrusday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }, 
                        {
                            "day": "Friday",
                            "time": ["8:00", "9:00", "10:00", "11:00", "12:00"],
                            "subject":["English","Hindi","Maths","Science","Social Studies"]
                        }
                    ]
                })
                    
            }   
            else{
                res.json("class not found").status(404)
            }
    })
    
})      
        
        
    

module.exports = router;
