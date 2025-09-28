import mongoose from "mongoose";

const connectDB = async ()=>{
  try {
    mongoose.connection.on('conected', ()=> console.log("Database Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/Quickstay-Hotel Booking`)
  } catch (error) {
    console.log(error.message)
  }
}


export default connectDB;