//Require Mongoose
const mongoose = require('mongoose');


const player = mongoose.model('AmanTest1',{
    name:{
        type:String
    },
    team:{
        type:String
    },
    ranking:{
        type:String
    }
},"AmanTest1")

module.exports={player}