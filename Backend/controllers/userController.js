import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


//Login User 
const loginUser = async (req,res) => {
    const {email,password} = req.body; 

    try {
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false,message:"User Doesn't Exists"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})

        
    }

}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user 
const registerUser = async(req,res) => {
    const {name,password,email} = req.body; 
    try {
        const exists = await userModel.findOne({email}) 
        if(exists){
            // Checking User Already Exists
            return res.json({success:false,message:"User Already Exists"})
        }

        //validating email format & string password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a Valid Email"})
        }

        if(password.length < 8){
            return res.json({success:false,message:"Please Enter a Strong Password"})
        }

        //hashing user password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token:token})
        


    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error Occured"})
        
    }

}

export {loginUser,registerUser}

