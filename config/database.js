const mongoose = require("mongoose");

require("dotenv").config();
const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    })
    .then(console.log("Db connected successfully"))
    .catch((error)=>{
        console.log("DB facing connection issues");
        console.log(error);
        process.exit(1);
    })
}
module.exports = connectWithDb;