const express = require('express');

const app = new express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect') // function that connects to database

// middleware
app.use(express.json());
app.use(express.static('./public'));
// routes
app.get('/hello',(req,res)=>{
    res.send("Task Manager app");
});


app.use('/api/v1/tasks',tasks);

// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')         - create a new task
// app.get('/api/v1/tasks/:id')      - get a single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task        

const port = 3000;


const start = async ()=> // No need to connect to the server if database is not connected
{
    try {
       await connectDB();
       app.listen(port,console.log(`server is listening on port ${port} `));
        
    } catch (error) {
        console.log(error);
        
    }
}

start();


