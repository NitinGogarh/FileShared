import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./connection/connectdb.js";
import fileModel from "./models/model.js";
import { router } from "./routes/upload.js";

const app = express();
connectToDB();
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use("/",router)



app.listen(process.env.PORT, () => {
  console.log("server started at port " + process.env.PORT);
});
