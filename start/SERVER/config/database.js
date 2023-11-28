// conection in db
const mongoose = require("mongoose");
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("DB is connect Successfully"))
       .catch ((error) => {
        console.log(`Error to conect DB ${error}`);
        process.exit(1);
    })
};