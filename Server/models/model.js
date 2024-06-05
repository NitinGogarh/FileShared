import mongoose from "mongoose";

const fileSchema  = new mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    fileAddress:{
       type:String,
       required:true
    },
    downloadCount:{
       type:String,
       default:0
    }
})
const fileModel = mongoose.model("files",fileSchema)  
export default fileModel
