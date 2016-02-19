var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var postpl=require('../lib/user/user');

exports.createPost  = function(req, res){

		// var post = new Post();
		// post.text = req.body.text;
		// post.created_by = req.body.created_by;
         var data=req.body;
        postpl.createPost(data,function(err, post){
            if(err){
                res.status(500).send();
            }
            res.send(post);
        });
		
};


exports.getAllPosts =function(req, res,next){
       Post.find()
       .populate('created_by')
       .exec(function(err, posts){
			if(err){
				return res.send(500, err);
			}
			return res.json(posts);
		});
	};
    
  exports.getPostById = function(req, res){
		Post.findById(req.params.id)
        .populate('created_by')
        .exec(function(err, post){
			if(err)
				res.send(err);
			res.json(post);
		});
	}; 
    
    exports.searchpost = function(req, res){
		Post.find({text:req.body.text} ,function(err, post){
			if(err)
				res.send(err);
			res.json(post);
		});
	}; 
	//updates specified post
exports.updatePost= function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err)
				res.send(err);

			post.created_by = req.body.created_by;
			post.text = req.body.text;

			post.save(function(err, post){
				if(err)
					res.send(err);

				res.json(post);
			});
		});
	};
    
    //deletes the post
exports.deletePost= function(req, res) {
		Post.remove({
			_id: req.params.id
		}, function(err) {
			if (err)
				res.send(err);

			res.json(Post);
		 
		});
	};
