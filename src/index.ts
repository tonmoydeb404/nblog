import dotenv from "dotenv";
import app from "./app";
dotenv.config();

// APP PORT
const PORT = parseInt(process.env.PORT) | 5000;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
