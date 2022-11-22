import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


// @description - To fetch all users
// @Method - Get /api/users
// @access - public


const getUsers= async(req,res)=>{
    try {
        let users=await User.find();
        
        res.status(200).send({
            count:users.length,
            data:users
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
};

const getUserById = async(req,res)=>{
    try {
        let{_id}=req.params
        let users= await User.find({_id});
        res.status(200).send({
            data: users
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    };
};

const createUser = async(req,res)=>{
    try{
        let data= req.body;
        let check= await User.findOne({email: data.email});

        if(!check)
        {let password= await bcrypt.hash(data.password,10);
        data.password= password;

        let users= await User.create(data);
        res.status(200).send({
            data:users
        });}
        else{
            throw new Error ("email already exist");
        }
    }
    catch(error){
        res.send({
            error: error.message
        });
    }
};

const authUser= async(req,res)=>{
    try {
        let{email,password}=req.body;
    let user= await User.findOne({email});
    if(user){
        let check=await bcrypt.compare(password,user.password);
        if(check){
            let token= jwt.sign({id:user._id,isAdmin: user.isAdmin},process.env.SECRET_KEY);
            res.status(200).send({token});
        }
        else{
            throw new Error("password is invald")
        }
    }else{
        throw new Error("Email is invalid")
    }
    } catch (error) {
        res.status(401).send({error: error.message});
    }
}
export {getUsers,getUserById,createUser,authUser};
