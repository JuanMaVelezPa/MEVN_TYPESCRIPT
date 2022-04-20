import { connect } from "mongoose";
import * as dotenv from "dotenv";

export const startConnection = async () => {
  try {
    dotenv.config();
    const db = await connect(process.env.MONGO_URI!);
    console.log('-- Mongodb connected!');
  } catch (error) {
    console.log(error);
  }
};
