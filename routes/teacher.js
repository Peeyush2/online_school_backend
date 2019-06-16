const express = require("express")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()
const mongoose = require('mongoose')
const teacherModel = require('../models/teacherModel')
const classModel = require('../models/classModel')
const auth2 = require('../auth2')

//get all teachers data
router.get('/', function (req, res) {
    teacherModel.find()
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
//get one teacher data
router.post('/teacherdata', function (req, res) {
    teacherModel.find({ email: req.body.email })
        .select("name email phone")
        .exec()
        .then(teachersdata => {
            res.json(teachersdata).status(200)
        })
        .catch((err) => {
            res.json(err).status(300)
        })
})

//register here
router.post('/', function (req, res) {
    const newTeacher = new teacherModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        phone: req.body.phone
    });

    teacherModel.find({ email: req.body.email })
        .exec()
        .then(users => {
            if (users.length > 0) {
                res.send("Teacher already registered").status(400)
            }
            else {
                newTeacher.save()
                res.send("Welcome Sir").status(200)


            }
        })
})



//login here
// router.post('/login', function (req, res) {
//     teacherModel.findOne({ email: req.body.email })
//         .exec()
//         .then(user => {
//             if (user === null) {
//                 res.send("no email found please register first").status(404)
//             }
//             else {
//                 if (bcryptjs.compareSync(req.body.password, user.password)) {
//                     const token2 = jwt.sign({
//                         email: user.email,
//                         _id: user._id
//                     },
//                         'floccinaucinihilipilification',
//                         {
//                             expiresIn: '1h'
//                         }
//                     );
//                     res.json({
//                         "message": "Auth Successful",
//                         "token": token2
//                     }).status(200);
//                 }
//                 else {
//                     res.send("wrong password").status(401);
//                 }
//             }
//         })
// })



router.post('/login', function (req, res) {
    classModel.findOne({ standard: req.body.standard })
        .exec()
        .then(userss => {
            console.log(userss)
            // stdid=userss[0]._id
            teacherModel.findOne({ email: req.body.email })
                .exec()
                .then(user => {
                    if (user === null) {
                        res.send("no email found please register first").status(404)
                    }
                    else {
                        if (bcryptjs.compareSync(req.body.password, user.password)) {
                            const token2 = jwt.sign({
                                email: user.email,
                                _id: user._id
                            },
                                'floccinaucinihilipilification',
                                {
                                    expiresIn: '1h'
                                }
                            );
                            res.json({
                                "message": "Auth Successful",
                                "token": token2,
                                "id": user._id,
                                "classroomid": userss._id,
                                "email": user.email
                            }).status(200);
                        }
                        else {
                            res.send("wrong password").status(401);
                        }
                    }
                })
        })
        .then(() => {

        })

})





module.exports = router;