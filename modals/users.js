import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id : {
        type: String,
        required : true,
    },
    name : {
        type: String,
        required : true,
    },
    course : {
        type: String,
        required : true,
    }
});

export const User = mongoose.model("user",userSchema);
