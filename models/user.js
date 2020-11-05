const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be empty']
    },
    password: {
        type: {
            String,
        }
    },

}, {versionKey: 'false'});

const user = mongoose.model('User', userSchema);

module.exports = user;












module.exports = ""



