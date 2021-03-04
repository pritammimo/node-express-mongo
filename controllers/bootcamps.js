
//@desc GET all bootcamps
//@route Get /api/v1/bootcamps
//@access Public

exports.getBootcamps=(req,res,next)=>{
    res.status(200).json({success:true,msg:'show all bootcamps'})
}
//@desc GET single bootcamps
//@route Get /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Display bootcamp ${req.params.id}`})
}
//@desc create new bootcamp
//@route Post /api/v1/bootcamps
//@access Public
exports.createBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:'show all bootcamp'})
}
//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Public
exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:'show all bootcamp'})
}

//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Public
exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`delete bootcamp ${req.params.id}`})
}

