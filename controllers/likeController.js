const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async(req, res)=>{
    try{
        //fetch data create object and save
        const {post,user} = req.body();
        const like = new Like({
            post,user,
        });
        const savedLike = await like.save();
        console.log(savedLike);
        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true})
        .populate("likes").exec();

        res.json({
            post: updatedPost,
        })
    }
    catch(error){   
        return res.status(500).json({
            error: "Error While liking posts",
        })
    }

};


//unlikea post
exports.unlikePost = async(req,res)=>{
    try{
        //like ke collection ko bhi update krna pdega aur post collection ko bhi krna pdega
        const {post,like} = req.body;
        //find and delete the like collection ? post ki id aur like ki id se krenge

        const deletedLike = await Like.findOneAndDelete({post: post, _id: like}); //findOneandDelete mtlb jis bhi phli entry ke ander ye dono parametere match kr jayenge use delete kr do
        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true}); //likes ke ander deleteLike ki id delete kr do

        res.json({
            post: updatedPost,
        })

    }
    catch(error){
        return res.status(500).json({
            error: "Error while disliking post"
        })
    }
}

