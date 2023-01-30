const mongoose = require('mongoose');

const connectionString = "mongodb://127.0.0.1:27017/Task-Manager";



const connectDB = (url)=>{
return mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
}

module.exports=connectDB;


/*

const courseSchema = new mongoose.Schema(
    {
        name: String,
        author: String,
        tags:[String],
        date:{type:Date,default:Date.now},
        isPublished: Boolean
    }
) ;

const Course = mongoose.model('Course',courseSchema);

*/

