import fs from "fs";
import { __dirname } from "../../utils.js";

const path = __dirname +"/Courses.json";

export default class CursosManagers {
  async getCourses() {
    if (fs.existsSync(path)) {
      try {
        const courses = await fs.promises.readFile(path, "utf-8");
        const coursesParse = JSON.parse(courses);
        return coursesParse;
      } catch (err) {
        return err ;
      }
    } else {
      return [];
    }
  }

  async addCourses(obj) {
    console.log(obj)
   try{
     const courses =await this.getCourses()
     let id
     if(courses.length===0){
        id=1
     }
     else{
        id=courses[(courses.length)-1].id +1
     }
     const newCourse={id,...obj}
     courses.push(newCourse)
     await fs.promises.writeFile(path,JSON.stringify(courses))
     return newCourse
   }
   catch(err){
 console.log(err)
   }
  }
}
