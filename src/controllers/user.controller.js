import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { user } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
const {fullname,email,username,password} = req.body
console.log("email",email);


  //validation - n ot empty
  // if (fullname===""){
  //   throw new ApiError(400, "fullname is required")
  // }

  if(

    [ fullname, email, username, password].some((field)=>
    field?.trim()==="")
  ){
    throw new ApiError(400, "All fields are required")
  }

   const existedUser = User.findOne({
    $or: [{username}, {email}]
  })

if (existedUser){
  throw new ApiError(409, "User with email or username already exist")
}

req.files?.avatar[0]?.path

  // check if user already exit: username, email
  //check if files exist; images and avatar
  //upload them to cloudnairy
  // create user object-create entry in db
  //remove password and refresh token field from response
  // check foe user creation
  //return response




  
});

export { registerUser };
