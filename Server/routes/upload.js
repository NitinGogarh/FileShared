import express from 'express'
import uploadFile from '../controllers/uploadFile.js'
import multer from "multer";
import downloadFile from '../controllers/downloadFile.js';
const upload = multer({ dest: 'uploads/' })
export const router = express.Router()
router.post('/upload',upload.single('file'),uploadFile)   
router.get('/upload/:id',downloadFile)
