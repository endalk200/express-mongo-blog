const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    subject: { 
        type: String, 
        required: true, 
        unique: true 
    },
    body: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now, 
        required: true 
    }
});

module.exports = mongoose.model('Blog', BlogSchema)