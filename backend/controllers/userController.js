import uploadOnCloudinary from "../configs/cloudinary.js";
import User from "../models/userModel.js";

export const getCurrentUser = async (req,res) => {
    try {
        const user = await User.findById(req.userId).select("-password").populate("enrolledCourses")
         if(!user){
            return res.status(400).json({message:"user does not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"get current user error"})
    }
}

export const UpdateProfile = async (req, res) => {
  try {
    const userId = req.userId; // from isAuth middleware
    const { name, description } = req.body;
    let photoUrl;

    // ✅ If user uploaded new image, upload to Cloudinary
    if (req.file) {
      photoUrl = await uploadOnCloudinary(req.file.path);
    }

    // ✅ Build update object dynamically
    const updateFields = { name, description };
    if (photoUrl) {
      updateFields.photoUrl = photoUrl;
    }

    // ✅ Update and return updated user
    const user = await User.findByIdAndUpdate(userId, updateFields, {
      new: true, // return updated document
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Update Profile Error:", error);
    return res.status(500).json({ message: `Update Profile Error: ${error.message}` });
  }
};