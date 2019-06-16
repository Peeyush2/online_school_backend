const express = require("express")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()
const mongoose = require('mongoose')
const classModel = require('../models/classModel.js')
const auth2 = require('../auth2')
//get records of class
router.get('/', function (req, res) {
    classModel.find()
        .exec()
        .then((users) => {
            if (users.length > 0) {
                res.json(users).status(200)
            }
            else {
                res.send("no records to display").status(200)
            }
        })
        .catch(err => {
            res.json(err).status(500);
        })
})
//new class create here
router.post('/', function (req, res) {
    const newClass = new classModel({
        _id: new mongoose.Types.ObjectId(),
        standard: req.body.standard
        //nostudents: req.body.nostudents,
        //section: req.body.section,
        // subjects: req.body.subjects,
    });
    classModel.find()
        .exec()
        .then((uxx) => {
            //  if(uxx.length>0){

            newClass.save()
            console.log(newClass)
            res.send("new class created").status(200)

            //}
            //else{
            //  res.send("noo").status(200)
            // }
        })
        .catch(err => {
            res.send("error").status(500);
        })

})
module.exports = router;