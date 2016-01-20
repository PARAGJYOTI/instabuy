var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var UserProfile = mongoose.model('UserProfile');
var multer =require('multer');
var app=express.Router();
var crypto=require('crypto');


//The multer Storage configuration && File renaming using Crypto

var storage = multer.diskStorage( { destination: function(req, file, cb) {
  cb(null, './photos/') }  ,  filename : function(req, file, cb) {
  crypto.pseudoRandomBytes (16, function (err, raw) {
   cb(err, err ? undefined : raw.toString('hex') + Date.now() + '.jpg') ; 
});
 }
});
var uploading = multer({ storage :storage});
/*app.get('/' , function(req ,res){
	res.send("hiii");
});*/
app.get("/parag" , function(req , res){
	res.send("its only works");

});

app.post('/api/posts', (function(req, res){

		var post = new Post();
		post.Text = req.body.Text;
		post.created_by = req.body.created_by;
		post.save(function(err, post){
			if (err){
				return res.send(500, err);
			}
			return res.json(post);
		});
	})
	);
//app.get('/photos' , function(req ,res){
	//res.send(req.files);

//});




    //app.post('/photos' , uploading.single('parag'),  function(req, res){

	//res.send(req.file.path);
//});
	app.get('/api/posts'  ,(function(req, res){

		Post.find(function(err, posts){
			if(err){
				return res.send(500, err);
			}
			return res.json(posts);
		});
	})
);	

//post-specific commands. likely won't be used

	//gets specified post
	app.get('/api/posts/:id' ,function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err)
				res.send(err);
			res.json(post);
		});
	}) ; 
	//updates specified post
	app.put('/api/posts/:id' ,function(req, res){
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
	});
	//deletes the post
	app.delete('/api/posts/:id' ,function(req, res) {
		Post.remove({
			_id: req.params.id
		}, function(err) {
			if (err)
				res.send(err);

			res.json(Post);
		 
		});
	});

   
	module.exports=app;