import fileModel from "../models/model.js";
const downloadFile = async(req,res)=>{
    const id = req.params.id;
    try {
        const file = await fileModel.findById(id)
        file.downloadCount++;
        file.save()
        const path = file.fileAddress
        return res.download(path,file.fileName)
    } catch (error) {
        return res.status(400,{msg:error.message})
    }
}
export default downloadFile