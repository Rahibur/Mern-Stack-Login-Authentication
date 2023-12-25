//Require mongoose
const mongoose = require ('mongoose');
//write form related input filleds data in backend.
const CrudSchema = new mongoose.Schema({
   
    
    name:{
        type:String,
        required:true   
    }, 
    email: {
        type:String,
        required:true,
        unique:true
    }, 
    age: {
        type:String,
        required:true
    }, 
    mobile: {
        type:Number,
        required:true
    }, 
    work: {
        type:String,
        required:true
    }, 
    address: {
        type:String,
        required:true
    }, 
    desc: {
        type:String,
        required:true
    },
    linkedin: {
        type:String,
        required:true
    },
    other: {
        type:String,
        required:true
    },
    skills: {
        type:String,
        required:true
    },
    experience: {
        type:String,
        required:true
    },
    edu: {
        type:String,
        required:true
    }
    
   

})
//export modules
const User = mongoose.model('Notes',CrudSchema);
module.exports =User;