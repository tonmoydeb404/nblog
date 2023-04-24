import ejs from "ejs";
import express from "express";
import { defaultErrorHandler, notFoundErrorHandler } from "./errors";
import middleware from "./middleware";
import router from "./router";

const app = express();

// static files
app.use(express.static("public"));

// template engine
app.engine("html", ejs.renderFile);

app.use(middleware);
app.use(router);
app.use(notFoundErrorHandler);
app.use(defaultErrorHandler);

export default app;
