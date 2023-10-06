const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: Object // Assuming the image will be stored as a URL
    },
},
{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
