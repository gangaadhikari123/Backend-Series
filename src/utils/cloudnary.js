// gives the path to the local file from server


import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.LOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) =>{
    try{ //upload file in cloudinary
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, 
            {
                resource_type: "auto"
            }
        )
        //file has been uploaded successfully
        console.log("file is uploaded in cloudinary",
             response.url);
             return response;


    } catch(error){
        fs.unlinkSync(localFilePath)// removr the locally saved temp file 
        //as the upload operation got failed
        return null;

    }
}

// cloudinary.v2.uploader
// .upload("dog.mp4", {
//   resource_type: "video", 
//   public_id: "my_dog",
//   overwrite: true, 
//   notification_url: "https://mysite.example.com/notify_endpoint"})
// .then(result=>console.log(result));


export {uploadOnCloudinary}