//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


exports.createComment = async(req, res)=>{
    try{
        //entry create : We use Save function which is alter method of create function save function ke liye make sure object create kr liya ho
        
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post, user, body
        });
        //save 
        const savedComment = await comment.save();


        //ab dhyan se socho jo bhi new comment aayega vo post wale model m comment array m store hoga uske liye bhi kro ab
        //find the post using ID and add the new comment to its comment array
        const updatePost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new: true})  //push operator is used to update and pull operator is used to delete.   New true ka mtlb h jo ab db m return krna vo purani wali nhi updated return krni h
        .populate("comments") //populate the comment array with comment documents : query  //populate krne se actual comment aa jayenge aur agar nhi use krta to sirf id aayegi
        .exec(); // execute the qurey

        res.json({
            post: updatePost,
        });

    }
    catch(error){
        res.status(500).json({
            error: "Error while creating comment",
        });
    }
}