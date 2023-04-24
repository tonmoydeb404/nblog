import dotenv from "dotenv";
import app from "./app";
import connectDB from "./db/connectDB";
dotenv.config();

// APP properties
const PORT = parseInt(process.env.PORT) | 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const startApp = async () => {
  try {
    await connectDB(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// start app
startApp();
