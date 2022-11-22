import express from 'express';
import connectDB from './db.js';
import User from './models/userModel.js';
import router from './routes/Product.js';
import user from "./routes/users.js";
import dotenv from "dotenv";
import cloudinaryConfig from "./config/cloudinary.js";
import multer from "multer";
import cloudinary from "cloudinary";
dotenv.config();

const app= express();
const upload = multer({dest:"uploads/"});
app.use(express.json());


connectDB();
cloudinaryConfig();

app.post("/uploads",upload.single("image"), (req,res)=>{
    cloudinary.v2.uploader.upload(
        req.file.path,
        function(error, result) {
            
            res.send(result);
        }
    );
});
     
    




app.use("/api/products",router);
app.use("/api/users",user);
let Port=process.env.PORT || 8000
app.listen(Port, console.log("server is runnign on port 8000"));









// crating schemas, schema is also known as structure for collections 


// multer- file handling package
// cloudingary- cloud base storage



// const employee1={
//     employeeName:"Alex",
//     employeeSalary:100000,
//     joiningDate:12,
//     dateOfBirth:2,
//     role:"team leader",
//     department:"Marketing"

    
// }
// const employee2={
//     employeeName:"Grecy",
//     employeeSalary:12000,
//     joiningDate:15,
//     dateOfBirth:10,
//     role:"sales",
//     department:"Marketing"

    
// }
// const employee3={
//     employeeName:"Smith",
//     employeeSalary:15000,
//     joiningDate:123658,
//     dateOfBirth:2,
//     role:"test",
//     department:"Testing"

    
// }
// const employee4={
//     employeeName:"Chris",
//     employeeSalary:18000,
//     joiningDate:19,
//     dateOfBirth:18,
//     role:"security",
//     department:"Cyber"

    
// }

// const insertData= async()=>{
//     let result= await Employee.insertMany([employee1,employee2,employee3,employee4]);
//     if(result)console.log("data is inserted")

// }
// insertData();





