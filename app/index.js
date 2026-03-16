import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Version v2 running");
})

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
})