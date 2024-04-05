const mongoose = require("mongoose");



//MUGHE COMMENT MODEL M 3 CHIZEN INCLUDE KRNI H :
// 1. kIS POST PR COMMENT KIYA H 
// 2. KIS USER NE COMMENT KIYA H 
// 3. KYA COMMENT KIYA H 

//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" //refence to the post model

    },
    user:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);