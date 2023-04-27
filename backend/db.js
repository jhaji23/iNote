const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/inote";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
module.exports = connectToMongo;
