import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    }
)

//strategy we are using is first we would upload file on server in our case local and then on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        fs.unlink(localFilePath);
        return response;//the function calling it would fetcj the url itself

    }
    catch (error) {
        fs.unlink(localFilePath);
        return null;
    }

}
export { uploadOnCloudinary };