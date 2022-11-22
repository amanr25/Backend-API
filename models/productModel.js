import mongoose from "mongoose";

const employeeDetail= mongoose.Schema({
    employeeName:{
        type: String,
        minLength:3,
        maxLength:50,
        required:true,
    },
    employeeSalary:{
        type:Number,
        min:1000,
        max:1000000000000,
        required: true,
    },
    joiningDate:{
        type:Number,
        required:true,

    },
    dateOfBirth:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        minLength:3,
        maxLength:50,
        required:true,

    },
    department:{
        type:String,
        required:true,
        enum:["Testing","Marketing","Finance","Cyber"]
    }
});

const Employee = mongoose.model("Employee",employeeDetail);

export default Employee;