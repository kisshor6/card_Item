const mongoose = require('mongoose');
const mongooseUri = "mongodb://localhost:27017/july30"
mongoose.connect(mongooseUri, () => {
    console.log("connected to mongoose database");
})