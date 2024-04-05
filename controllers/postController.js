const Post = require("../models/postModel");
// const { post } = require("../routes/blog");

exports.createPost = async(req, res)=>{
    try{
        //fetch data
        const {title, body} = req.body;
        //object create kr lo
        const post = new Post({
            title, body
        });
        //save 
        const savedPost = await post.save();

        res.json({
            post : savedPost,
        });

    }
    catch(error){
        res.status(500).json({
            error : "Error while creating Post",
        });
    }
};


//ab m ye bhi chahta hu ki saari posts aa jaye mere pass fetch hoke uske liye alag se likh dunga function
exports.getAllPosts = async (req, res)=>{
    try{
        //saari posts ko fetch kr liya with likes and comments arrays ke saath
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })

    }
    catch(error){
        return res.status(500).json({
            message: "eRROR while fetching posts",
        });
        
    }
}
