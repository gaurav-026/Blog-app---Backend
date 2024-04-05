const mongoose = require("mongoose");



//MUGHE LIKe MODEL M 2 CHIZEN INCLUDE KRNI H :
// 1. kIS POST PR like KIYA H 
// 2. KIS USER NE like KIYA H 

//route handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
});

//export
module.exports = mongoose.model("Post", postSchema);