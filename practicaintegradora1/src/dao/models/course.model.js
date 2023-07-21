import mongoose from "mongoose";
const courseSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    }
})

export const  courseModel=mongoose.model("Courses",courseSchema)