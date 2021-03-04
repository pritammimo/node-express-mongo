
const logger=(req,res,next)=>{
    req.hello='hello world'
    console.log(`${req.method}`);
 next();};
 module.exports=logger;