import  express  from "express";
import { Assignmentor, CreateStudent, GetAllStudents, getStudentAssignedMentor } from "../Controllers/Student.Controller.js";

const StudentRouter = express.Router()

StudentRouter.post('/create-student',CreateStudent)
StudentRouter.get('/getallstudents',GetAllStudents)
StudentRouter.put('/assign/:id',Assignmentor)
StudentRouter.get('/get-particular/:id',getStudentAssignedMentor)
export default StudentRouter 