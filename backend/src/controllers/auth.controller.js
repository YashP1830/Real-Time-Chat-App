import { User } from "../models/User.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/utils.js";
export const signup=async (req, res) => {
   const {fullName,email,password}=req.body
    try {
    
       if(!fullName || !email || !password)
       {
          return res.status(400).json({message:"All fields are required"})
       }
       if(password.length <6)
          {
            return res.status(400).json({message:"Passowrd should be of atleast 6 characters"})
          }
        
           // check if emailis valid: regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({ message: "Invalid email format" });
        }
    
        const user=await User.findOne({email});
    
        if(user) res.status(400).json({message:"The Email already exist"})
    
         const salt=await bcrypt.genSalt(10)
         const hasedPassword=await bcrypt.hash(password,salt)
         
         const newUser= new User({
            fullName,
            email,
            password:hasedPassword
         })
    
         if(newUser)
         {
            generateToken(newUser._id,res);
            await newUser.save();
    
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullname,
                email:newUser.email,
                profilepic:newUser.profilepic
            })
         }
         else{
            res.status(400).json({meassage:"Invalid User"})
         }
    } catch (error) {
        console.log("Error in signup")
        res.status(500).json({message:"Internal server error"})
    }

    
 };