const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
    name: {type:String, required:true},
    
    email: {type:String, required:true, unique:true},
    
    password: {type:String, required:true},
    
    standard: {type:Number},
    
    age: {type:Number},
    
    classroomid: {type:mongoose.Schema.Types.ObjectId, ref:"classes"},

    inlecture: {type:Boolean},

    hw: [{type:String}]

})


module.exports = mongoose.model('student',studentSchema)