const mongoose = require('mongoose');

/*
name
completed?
*/
const taskSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'name should have a value'],
            trim:true, // name = "     mohamed     "=> "mohamed"
            maxlength:[25,'name cannot be more than 25 characters'],
        },
        completed:{
            type:Boolean,
            default:false, // default value : tasks are by default not completed once they are added
        },
    }
)


module.exports=mongoose.model('Task',taskSchema);