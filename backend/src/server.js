import express from "express"  
import dotenv, { configDotenv } from "dotenv"
import path from "path"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config();
const app=express()

const PORT=process.env.PORT || 3000

const __dirname=path.resolve()
app.use(cors({origin:process.env.CLIENT_URL || "http://localhost:5173",credentials:true}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

app.listen(PORT,()=>{
    console.log("The server is listening at port 3000")
    connectDB()
})

 //req.body

if(process.env.NODE_ENV=="Production")
{
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    //The * symbol loads frontedn whenever anything except the given routes is loaded
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
    })
}