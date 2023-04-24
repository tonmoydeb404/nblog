import { json, urlencoded } from "express";
import morgan from "morgan";

const middleware = [morgan("dev"), json(), urlencoded({ extended: true })];

export default middleware;
