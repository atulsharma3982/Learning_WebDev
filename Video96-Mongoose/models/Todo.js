import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    title: {type:String,default:"Hey"},
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema);
