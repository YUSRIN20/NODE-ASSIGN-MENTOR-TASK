import express from 'express'
import { CreateMentor, GetAllMentor, getMentorAssigned, getStudentListMentor } from '../Controllers/Mentor.Controller.js'

const MentorRouter  =express.Router()

MentorRouter.post('/create-mentor',CreateMentor)
MentorRouter.get('/getallmentors',GetAllMentor)
MentorRouter.put('/assign/:id',getMentorAssigned);
MentorRouter.get('/mentor-student/:id',getStudentListMentor)


export default MentorRouter