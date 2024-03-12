import mongoose from "mongoose";


const  MentorSchema = mongoose.Schema({
    name:String,
    email:String,
    students:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Student'
    }]
},{versionKey:false})

const Mentor = mongoose.model('Mentor',MentorSchema)

export default Mentor