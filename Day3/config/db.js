const mongoose = require("mongoose");

const connectDB = async () => {
    try {//error handling
        await mongoose.connect("mongodb://localhost:27017/collegeDB");//mongoose is used to connect url string
        console.log("MongoDB connected to collegeDB");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

module.exports = connectDB;
        