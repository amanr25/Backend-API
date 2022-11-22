import mongoose from "mongoose";


const connectDB = () => {
  mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then((res) => console.log("mongoDb connected"));
};

export default connectDB;
