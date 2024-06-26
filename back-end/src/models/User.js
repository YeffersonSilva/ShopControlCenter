const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String, 
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String, 
        required: 'Add your name'
    }, 
    password: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
