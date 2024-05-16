import mongoose from "mongoose";

let isConnected = false;

const connectMongoDb = async () => {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.DATA_BASE_URI);
    isConnected = true;
  } catch (error) {
    return { error: error?.message };
  }
};

export default connectMongoDb;
