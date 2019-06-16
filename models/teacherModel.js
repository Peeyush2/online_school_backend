const mongoose=require('mongoose')
const teacherSchema=mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
    name: {type:String, required:true},
    
    email: {type:String, required:true, unique:true},
    
    password: {type:String, required:true},
    
    phone: {type:String},
    
    //classroomid: {type:mongoose.Schema.Types.ObjectId, ref:"class"}

})


module.exports = mongoose.model('teacher',teacherSchema)