const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    image: {
        type: String,
        require
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

const students = mongoose.model('listapi', StudentSchema);
module.exports = students; 