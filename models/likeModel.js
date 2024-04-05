const mongoose = require("mongoose");



//MUGHE LIKe MODEL M 2 CHIZEN INCLUDE KRNI H :
// 1. kIS POST PR like KIYA H 
// 2. KIS USER NE like KIYA H 

//route handler
const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" //refence to the post model

    },
    user:{
        type: String,
        required: true,
    },
   
});

//export
module.exports = mongoose.model("Like", likeSchema);