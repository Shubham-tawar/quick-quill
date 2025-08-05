const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectToMongo;