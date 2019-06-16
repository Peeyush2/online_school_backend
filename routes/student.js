const express = require("express")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const router = express.Router()
const mongoose = require('mongoose')
const studentModel = require('../models/studentModel')
const classModel = require('../models/classModel')
const auth = require('../auth')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    // limits: {
    //   fileSize: 1024 * 1024 * 5
    // },
    fileFilter: fileFilter
});





//get all students data
router.get('/', function (req, res) {
    studentModel.find()
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




var classidh = undefined
//get all friends of particular student
router.post('/getfriends', function (req, res) {
    studentModel.find({ email: req.body.email })
        .select("classroomid")
        .exec()
        .then(users => {
            // users.map(ss=>{
            classidh = users[0].classroomid
            //})
            //res.json(classidh).status(200)
        })
        .then(() => {
            studentModel.find({ classroomid: classidh })
                .then(users1 => {
                    res.json(users1).status(200)
                })
        })

})

var str = "http://192.168.21.218:3000/"
//uploading hw
router.put('/', upload.single('hw'), function (req, res) {
    studentModel.findByIdAndUpdate(req.body.id, { $push: { hw: str + req.file.path } }, { new: true })
        .exec()
        .then((result) => {
            res.json(result).status(200)
        })
        .catch(err => {
            res.json(err).status(400)
        })
})

//fetch hw teacher
router.post('/gethwteacher', function (req, res) {
    studentModel.find({ classroomid: req.body.classroomid })
        .select("name hw")
        .exec()
        .then(user6 => {
            res.json(user6).status(200)
        })
        .catch(() => {
            res.json("error").status(400)
        })
})



//fetch hw of student
router.post('/gethwstudent', function (req, res) {
    studentModel.find({ email: req.body.email })
        .select("hw")
        .exec()
        .then(users5 => {
            if (users5[0].hw.length > 0)
                res.json(users5).status(200)
            else {
                res.json("Do something man you are not submitting hw").status(200)
            }
        })
        .catch((err) => {
            res.json(err).status(404)
        })
})
//fetch students added by maharishi
router.post('/getstudents', function (req, res) {
    studentModel.find({ email: req.body.email })
        .exec()
        .then(students => {
            if (students.length > 0)
                res.json(students).status(200)
            else {
                res.json("No details exists for this email ").status(200)
            }
        })
        .catch((err) => {
            res.json(err).status(404)
        })
})

//individual register here
router.post('/', function (req, res) {
    classModel.find({ standard: req.body.standard })
        .select("_id")
        .exec()
        .then(users => {
            //  console.log(users)
            //res.json(users[0].id).status(200)
            const newStudent = new studentModel({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                standard: req.body.standard,
                // subjects: req.body.subjects,
                age: req.body.age,
                classroomid: users[0].id,
            });

            studentModel.find({ email: req.body.email })
                .exec()
                .then(users => {
                    if (users.length > 0) {
                        res.send("student already enrolled").status(400)
                    }
                    else {
                        studentModel.count({ classroomid: req.body.classroomid }, function (err, c) {
                            if (c > 60) {
                                res.send("limit exceeded").status(200)
                            }
                            else {
                                newStudent.save()
                                res.send("you are enrolled").status(200)
                            }
                        })

                    }
                })
        })
    // const newStudent=new studentModel({
    //     _id:new mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: bcryptjs.hashSync(req.body.password,10),
    //     standard: req.body.standard,
    //    // subjects: req.body.subjects,
    //     age: req.body.age,
    //    classroomid: req.body.classroomid,
    // });

    // studentModel.find({email:req.body.email})
    // .exec()
    // .then(users=>{
    //     if(users.length>0){
    //         res.send("student already enrolled").status(400)
    //     }
    //     else{
    //         studentModel.count({classroomid:req.body.classroomid},function(err,c){
    //             if(c>60){
    //                 res.send("limit exceeded").status(200)
    //             }
    //             else{
    //                 newStudent.save()
    //                 res.send("you are enrolled").status(200)
    //             }
    //         })

    //     }
    // })
})

//get all student by classlid
var classidh2 = undefined
router.post('/getstudentbyclassid', function (req, res) {
    studentModel.find({ classroomid: req.body.classroomid })
        .select("classroomid")
        .exec()
        .then(users => {
            // users.map(ss=>{
            classidh2 = users[0].classroomid
            //})
            //res.json(classidh).status(200)
        })
        .then(() => {
            studentModel.find({ classroomid: classidh2 })
                .then(users1 => {
                    res.json(users1).status(200)
                })
        })

})

//login here
router.post('/login', function (req, res) {
    studentModel.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if (user === null) {
                res.send("no email found please register first").status(404)
            }
            else {
                if (bcryptjs.compareSync(req.body.password, user.password)) {
                    const token = jwt.sign({
                        email: user.email,
                        _id: user._id
                    },
                        'supercalifragilisticexpialidocious',
                        {
                            expiresIn: '1h'
                        }
                    );
                    res.json({
                        "message": "Auth Successful",
                        "token": token,
                        "id": user._id,
                        "classroomid": user.classroomid,
                        "email": user.email
                    }).status(200);
                }
                else {
                    res.send("wrong password").status(401);
                }
            }
        })
})
let grouppass = undefined;
//register group
router.post('/getpasswordforgroup', function (req, res) {
    grouppass = req.body.password;
    res.send('password accepted').status(201);
})
router.post('/registergroup', function (req, res) {
    const newStudent = new studentModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: bcryptjs.hashSync(grouppass, 10),
        standard: req.body.standard,
        // subjects: req.body.subjects,
        age: req.body.age,
        classroomid: req.body.classroomid,
    });

    studentModel.find({ email: req.body.email })
        .exec()
        .then(users => {
            if (users.length > 0) {
                res.send("student already enrolled").status(400)
            }
            else {
                studentModel.count({ classroomid: req.body.classroomid }, function (err, c) {
                    if (c > 60) {
                        res.send("limit exceeded").status(200)
                    }
                    else {
                        newStudent.save()
                        res.send("you are enrolled").status(200)
                    }
                })

            }
        })
})

module.exports = router;