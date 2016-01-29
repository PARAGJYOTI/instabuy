var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');


exports.createPost  = function(req, res){

		var post = new Post();
		post.text = req.body.text;
		post.created_by = req.body.created_by;
		post.save(function(err, post){
			if (err){
				return res.send(500, err);
			}
			return res.json(post);
		});
};

exports.getAllPosts =function(req, res){
       Post.find(function(err, posts){
			if(err){
				return res.send(500, err);
			}
			return res.json(posts);
		});
	};
    
  exports.getPostById = function(req, res){
		Post.findById(req.params.id, function(err, post){
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
