import mongoose from "mongoose";

export interface ITodo extends mongoose.Document {
    task: string;
    finished?: boolean;
    createdAt?: Date;
}

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    finished: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model<ITodo>('Todo', todoSchema)

export default new Todo;