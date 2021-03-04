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
//const logger=require('./middleware/logger')
const morgan=require('morgan');
const dotenv=require('dotenv');
const colors=require('colors');
const connectDB=require('./config/db');

dotenv.config({path:'./config/config.env'});
connectDB();
const app=express();
//   app.use(logger)
//middleware
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}
 const bootcamps=require('./routes/bootcamp') 
 app.use('/api/v1/bootcamps',bootcamps)
const PORT=process.env.PORT||5000;
const server=app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
//handle rejection
process.on('unhandledRejection',(err,promise)=>{
    console.log('Error:${err.message}'.red);
    server.close(()=>process.exit(1));
});