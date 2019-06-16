const mongoose = require('mongoose')
const classSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    standard: { type: Number, require: true },

    //nostudents:{type:Number, require:true},

    //section:{type:String, unique:true},

    // subjects: [  {type:String}  ],

    //student:[{type:String , ref:"student"}]
})
module.exports = mongoose.model('classes', classSchema)