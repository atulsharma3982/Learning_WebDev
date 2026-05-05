import { Int32 } from 'bson';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: String,
    salary: Int32,
    language: String,
    city: String,
    isManager: Boolean
});

export const Employees = mongoose.model('Employees', employeeSchema, 'employees')