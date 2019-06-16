const express=require('express')
const morgan = require ('morgan')
const parser = require ('body-parser')
const mongoose = require ('mongoose')
const app = express()
const port = 3000 
//mongoose.connect('mongodb+srv://peeyush:123@cluster0-yr2gz.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
mongoose.connect('mongodb://localhost:27017/online_school2',{useNewUrlParser:true})
//access-control
app.use('*', function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type,Authorization');
    res.set("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    next();
})

//parsing json
app.use(parser.json())
app.use(parser.urlencoded({extended:true}))

//routes files path
const classes = require('./routes/class.js')
const student = require('./routes/student.js')
const teacher = require('./routes/teacher.js')
const classdata=require('./routes/classdata.js')
const task=require('./routes/task.js')
const schedule= require('./routes/schedule.js')

//routes
app.use(morgan('dev'))
app.use('/uploads',express.static('uploads'));
app.use('/classes',classes)
app.use('/student',student)
app.use('/teacher',teacher)
app.use('/classdata',classdata)
app.use('/task',task)
app.use('/schedule',schedule)

app.get('/',function(req,res){
    res.send("Welcome to online school backend ").status(200)
})

app.listen(port,function(){
    console.log(`server running on port ${port}`)
})
