const mongoose = require("mongoose");
let mongodInstance = null;

const connectDB = async () => {
  const localUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/signupflow";
  try {
    await mongoose.connect(localUri);
    console.log("MongoDB Connected to", localUri);
    return;
  } catch (err) {
    console.warn("Local MongoDB connect failed, falling back to in-memory MongoDB:", err.message);
  }

  // Fallback to in-memory MongoDB for development when local MongoDB isn't available
  try {
    const { MongoMemoryServer } = require("mongodb-memory-server");
    mongodInstance = await MongoMemoryServer.create();
    const memUri = mongodInstance.getUri();
    await mongoose.connect(memUri);
    console.log("MongoDB Connected (in-memory)");
  } catch (err) {
    console.error("Failed to start in-memory MongoDB:", err);
    throw err;
  }
};

module.exports = connectDB;
