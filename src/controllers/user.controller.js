import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
const {fullname,email,username,password} = req.body
console.log("email",email);


  //validation - n ot empty
  // check if user already exit: username, email
  //check if files exist; images and avatar
  //upload them to cloudnairy
  // create user object-create entry in db
  //remove password and refresh token field from response
  // check foe user creation
  //return response




  
});

export { registerUser };
