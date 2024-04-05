const express = require("express");
const app = express();

//dot env configuareation ko process m 
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

//impor route file
const blog = require("./routes/blog");

//mount the route
app.use("/api/v1", blog);


//db connect
const connectWithDb = require("./config/database");
connectWithDb();

//start server
app.listen(PORT, ()=>{
    console.log("App is running successfully");
})

//default routes
app.get('/', (req, res)=>{
    res.send("This is homepage ")
})