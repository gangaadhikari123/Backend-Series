import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js";

import {uploadOnCloudinary} from "../utils/cloudnary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";


const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
const {fullName, email, username, password} = req.body
console.log("email",email);


  //validation - n ot empty
  // if (fullname===""){
  //   throw new ApiError(400, "fullname is required")
  // }

  if(

    [ fullName, email, username, password].some
    ((field)=>
    field?.trim()==="")
  ){
    throw new ApiError(400, "All fields are required")
  }

   const existedUser =  await User.findOne({
    $or: [{username}, {email}]
  })

if (existedUser){
  throw new ApiError(409, "User with email or username already exist")
}

 const avatarLocalPath = req.files?.avatar[0]?.path;

 const coverImageLocalPath = req.files?.coverImage[0]?.path;


  // check if user already exit: username, email

  if(!avatarLocalPath){
    throw new ApiError(400,"Avatar cover image not uploaded")

  }

  //check if files exist; images and avatar


  //upload them to cloudnairy

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!avatar){
    throw new ApiError(400, "Avatar required")
  }


  const user = await user.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
})
  // create user object-create entry in db

   const createdUser = await user.findById(user._id).select(
    "-password -refreshToken"
   )

   if (!createdUser){
    throw new ApiError(500, "Something went wrong while registing user ")

   }

   return res.status(201).json(
    
    new ApiResponse(200, createdUser, "User register successfully")
  )
  //remove password and refresh token field from response
  // check foe user creation




  //return response




  
});

export { registerUser };