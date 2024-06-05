import fileModel from "../models/model.js";

const uploadFile = async (req,res)=>{
    try {
     const newFile = await fileModel.create({
        fileName:req.file.originalname,
        fileAddress:req.file.path,
     })
     const _id = newFile._id
     return res.status(200).json({path:"http://localhost:8080/upload/"+_id});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({msg:error.message})
    }
   
}
export default uploadFile