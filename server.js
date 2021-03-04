/*const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.setHeader('X-Powered_By','Node.js')
    res.write('hello');
    res.end();
})
const PORT=5000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));*/
const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'})
const app=express();
 const bootcamps=require('./routes/bootcamp') 
 app.use('/api/v1/bootcamps',bootcamps)
const PORT=process.env.PORT||5000;
app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);