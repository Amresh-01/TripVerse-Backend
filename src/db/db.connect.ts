import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async() => {
try {
  const Mongo_Url = process.env.MONGO_URI as string;
  await mongoose.connect(Mongo_Url);
  console.log("MongoDb is conneected....");
} catch (error) {
  console.error("Error in connecting to Database....", error);
  process.exit(1);
}
}

export default connectDb;