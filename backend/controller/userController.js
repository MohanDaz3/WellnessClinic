import asyncHandler from 'express-async-handler'
import User from "../models/UserSchema.js"
import generateToken from '../utils/generateToken.js'

// @desc    Auth user/set token
// route    POST/api/users/login
// @access  public

const loginUser = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {email,password}= req.body;

    const user = await User.findOne({email});
    if(user &&(await user.matchPassword(password))){
        generateToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            image:user.photo,
            phone:user.phone,
            bloodType:user.bloodType,
            message:"Login successfully"
            
        })
    }else{
        res.status(400);
        throw new Error('Invalid email or password')
    }
})

// @desc    register a new user
// route    POST/api/users/register
// @access  public

const registerUser=asyncHandler(async(req,res)=>{
    console.log(req.body);
    const{name,email,password,photo,gender}=req.body
    
    
        const userExist = await User.findOne({email})
        if(userExist){
            res.status(400);
            throw new Error('User already exists')
        }
        const user = await User.create({
            name,
            email,
            password,
            gender,
            photo
        });
        console.log("user created",user)
        if(user){
            generateToken(res,user._id)
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                gender:user.gender,
                photo:user.photo
            })
        }else{
            res.status(400);
            throw new Error('Invalid user data')
        }
})

// @desc    Logout User
// route    POST/api/users/logout
// @access  public

const logoutUser= asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    })

    res.status(200).json({message:"user loged out"})
})

// @desc    Get user profile
// route    GET/api/users/profile
// @access  private
const getUserProfile= asyncHandler(async(req,res)=>{
    const user={
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email
    }
    res.status(200).json(user)
});

export{
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile
}