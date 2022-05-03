const Post = require('../models/post');
const User = require('../models/user');

class postController{
    async create(req, res){
        const newPost = new Post(req.body);
        try{
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res){
        try {
            const post = await Post.findById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.updateOne({$set: req.body});
                res.status(200).json("post has been updated");
            } else {
                res.status(403).json("you can update only your posts");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async delete(req, res){
        try {
            const post = await Post.findById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.deleteOne();
                res.status(200).json("post has been deleted");
            } else {
                res.status(403).json("you can delete only your posts");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async likePost(req, res){
        try{
            const post = await Post.findById(req.params.id);
            if(!post.likes.includes(req.body.userId)){
                await post.updateOne({$push: {likes: req.body.userId}});
                res.status(200).json("post has been liked")
            } else {
                await post.updateOne({$pull: {likes: req.body.userId}});
                res.status(200).json("post has been disliked")
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async get(req, res){
        try{
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async timeline(req, res){
        try{
            const currentUser = await User.findById(req.params.userId);
            const userPosts = await Post.find({userId: currentUser._id});
            const friendPosts = await Promise.all(
                currentUser.followings.map(friendId => {
                    return Post.find({userId: friendId})
                })
            );
            res.status(200).json(userPosts.concat(...friendPosts));
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new postController();