import mongoose from "mongoose";

const connectDB = (URI: string) =>
  new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(URI);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });

export default connectDB;
