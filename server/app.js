const express = require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv")
const app = express()
const dns = require("dns")
const courseRoute = require("./routes/courseRoutes")

dotenv.config()
dns.setServers(["1.1.1.1","8.8.8.8"])
app.use("/api/course",courseRoute)
app.get("/welcome",(req,res)=>{
    res.send("Welcome back")
})

connectDB()

app.listen(3000,()=>{
    console.log("Listening to port.....")
})