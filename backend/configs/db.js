import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // must be called before using process.env

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
    } catch (error) {
        console.error("DB error:", error);
    }
};

export default connectDb;
