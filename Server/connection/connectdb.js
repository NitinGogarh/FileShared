
import mongoose from 'mongoose';

const connectToDB = () => {
  mongoose.connect("mongodb://localhost:27017/File")   
    .then(() => console.log("Database connected successfully"))
    .catch(error => {
      console.log(error.message);
    })
}

export default connectToDB; 
