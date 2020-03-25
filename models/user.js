const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User;