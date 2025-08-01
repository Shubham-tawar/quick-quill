const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the Notes model
const noteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        required: true,
        ref: 'User' // This establishes a relationship with the User model
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('Notes', noteSchema);