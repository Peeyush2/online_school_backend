const mongoose=require('mongoose')
const taskSchema=mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
    task: [{type:String}],

    classroomid:{type:mongoose.Schema.Types.ObjectId, ref:"classes"}

})


module.exports = mongoose.model('task',taskSchema)