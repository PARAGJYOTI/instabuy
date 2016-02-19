var mongoose = require('mongoose');
var Post = mongoose.model('Post');


exports.createPost=function(data,callback){
    var post=new Post();
    
      post.text=data.text;
      post.created_by=data.created_by;
    post.save(function(err, post){
			if (err){
				callback(err);
			}
			callback(null,post);
		});
    
    
}