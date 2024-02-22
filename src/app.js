import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//now we need to handle how different kind of data we can receive it could be anything like from url in json etc
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


//routes import
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);//route is used as a middleware

export { app };