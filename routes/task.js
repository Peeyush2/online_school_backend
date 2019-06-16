const express = require("express")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()
const mongoose = require('mongoose')
const taskModel = require('../models/taskModel.js')
const classModel = require('../models/classModel.js')
const studentModel = require('../models/studentModel.js')
const auth2 = require('../auth2')

//see all tasks student wise
var classidh = undefined
router.post('/', function (req, res) {
    studentModel.find({ email: req.body.email })
        .select("classroomid")
        .exec()
        .then(users => {
            // users.map(ss=>{
            console.log(users[0].classroomid)
            classidh = users[0].classroomid
            //})
            //res.json(classidh).status(200)
        })
        .then(() => {
            taskModel.find({ classroomid: classidh })
                .select("task")
                .exec()
                .then(users1 => {
                    if (users1.length > 0)
                        res.json(users1).status(200)
                    else
                        res.json("no tasks for today have fun").status(200)
                })
        })
        .catch(err => {
            res.json(err).status(200)
        })

})

//see all task teacher wise
router.post('/teachtask', function (req, res) {
    taskModel.find({ classroomid: req.body.classroomid })
        .select("task")
        .exec()
        .then(usersdata => {
            console.log(usersdata)
            if (usersdata.length > 0)
                res.json(usersdata).status(200)
            else
                res.json("no task").status(300)
        })
        .catch(err => {
            res.send(err).status(400)
        })
})


//add a task
router.post('/addtask', function (req, res) {
    taskModel.find({ classroomid: req.body.classroomid })
        .exec()
        .then(users => {
            if (users.length > 0) {
                console.log(users)
                taskModel.findOneAndUpdate({ classroomid: req.body.classroomid }, { $push: { task: req.body.task } }, { new: true })
                    .exec()
                    .then(users2 => {
                        res.json(users2).status(200);
                    })
                    .catch(err => {
                        res.json(err).status(400);
                    })
            }
            else {
                const newTask = new taskModel({
                    _id: new mongoose.Types.ObjectId(),
                    task: req.body.task,
                    classroomid: req.body.classroomid
                })
                newTask.save();
                res.send("new task created").status(200)
            }
        })
})



//delete task
router.post('/deletetask', function (req, res) {
    taskModel.remove({ classroomid: req.body.classroomid })
        .exec()
        .then(users3 => {
            res.json(users3).status(200)
        })
        .catch(err => {
            res.json(err).status(200)
        })
})
module.exports = router;