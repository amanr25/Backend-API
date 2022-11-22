import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/productModel.js"

dotenv.config();

const protect=async(req,res,next)=>{
try {
    let token= req.headers.authorization;
if(token){
    let {isAdmin}=jwt.verify(token.split(" ")[1],process.env.SECRET_KEY);

    if(isAdmin)next();
   
    else throw new Error("request failed,Invalid AUTH");
}
else {
    throw new Error("request failed no auth")
}
} catch (error) {
    res.status(401).send({error: error.message});
}
};
export default protect;