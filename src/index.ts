import dotenv from "dotenv";
import { createServer } from "http";
import app from "./app";
dotenv.config();

const server = createServer(app);

// APP PORT
const PORT = parseInt(process.env.PORT) | 5000;

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
