const Task = require('../models/task');

const getAllTasks = async (req, res) => 
{
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        
    }
    
  }

const createTask = async (req,res)=>
{
    try {
        const task = await Task.create(req.body);
         res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg:error}); 
    }
    
}

const getTask = async (req,res)=> // get single task
{

    try 
    {
        const task = await Task.findOne({_id:req.params.id});

        if(!task)
        {
            return res.status(404).json({msg:`no task with id ${req.params.id}`});
        }
        else
        res.status(200).json({task});    
    } catch (error) {
        res.status(500).json({msg:error}); 
    }
    

}

const updateTask = async (req,res)=>
{
    try {
        const {id:taskID} = req.params;
        const task  = await Task.findOneAndUpdate({_id:req.params.id},req.body);
        if(!task)
        {
            return res.status(404).json({msg:`no task with id ${req.params.id}`});   
        }
       else
        res.status(200).json({task});
        
    } catch (error) {
        res.status(500).json({msg:error}); 
    }
   
}

const deleteTask =async (req,res)=>
{
    try {
        //const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:req.params.id});
        if(!task)
        {
            return res.status(404).json({msg:`no task with id ${req.params.id}`});
        }
        else
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error}); 
    }
}

module.exports= // exporting object with the required functions 
{
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    

}