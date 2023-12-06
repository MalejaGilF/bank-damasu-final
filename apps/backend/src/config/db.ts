// import {ConnectOptions} from 'mongodb'
import mongoose from 'mongoose';
export const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/local');
  console.log('MongoDB Connected');
};
export default connectDB;
