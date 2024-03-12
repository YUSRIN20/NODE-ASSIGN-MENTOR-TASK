import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    name: String,
    email: String,
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    }
}, { versionKey: false });

const Student = mongoose.model('Student', StudentSchema);

export default Student;