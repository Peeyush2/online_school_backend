const mongoose = require ('mongoose')
const scheduleSchema= mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,

    classroomid: mongoose.Schema.Types.ObjectId,

    Subject: [{type:String}],

    time:[{type:String}],

    day:[{type:String}]

})
module.exports = mongoose.model('schedule',scheduleSchema)