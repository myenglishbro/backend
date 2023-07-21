import { courseModel } from "../models/course.model.js";

export default class CoursesManager{


    async getCourses(){
        try{
       const coursesdb= await courseModel.find({})
       return coursesdb
        }
        catch(err){
        return err
        }
    }

    async addCourses(obj){
        try{
       const coursenew= await courseModel.create(obj)
       return coursenew
        }
        catch(err){
        return err
        }
    }
}