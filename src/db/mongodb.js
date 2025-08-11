// db/mongodb.js
import mongoose from "mongoose";

const connectMongoDB = async (retries = 3) => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB already connected");
      return;
    }

    const connectionString = process.env.MONGODB_URI;

    if (!connectionString) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(
      `MongoDB connection attempt failed (${retries} retries left):`,
      error
    );

    if (retries > 0) {
      console.log(`Retrying connection in 2 seconds...`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return connectMongoDB(retries - 1);
    }

    throw error;
  }
};

export default connectMongoDB;
