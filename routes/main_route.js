var express = require('express');
var mongoose= require('mongoose');
var Post = mongoose.model('Post');
var UserProfile = mongoose.model('UserProfile');
var app=express.Router();
var api_post = require('./post_controller');
var api_user =require('./user_controller');
var api_photo = require('./file_controller');
var multer=require('multer');
var crypto =require('crypto');


var storage = multer.diskStorage( { destination: function(req, file, cb) {
  cb(null, './public/photos/') }  ,  filename : function(req, file, cb) {
  crypto.pseudoRandomBytes (16, function (err, raw) {
   cb(err, err ? undefined : raw.toString('hex') + Date.now() + '.jpg') ; 
});
 }
});

var uploading = multer({ storage :storage});
//post api routes 

app.post('/api/posts' , api_post.createPost);
app.get('/api/posts' , api_post.getAllPosts);
app.get('/api/posts/:id' , api_post.getPostById);
app.put('/api/posts/:id' , api_post.updatePost);
app.delete('/api/posts/:id' , api_post.deletePost);

//uSER Api rotes
//create//
app.post('/api/users' , api_user.createUser);
app.post('/api/users/:id/addBio' , api_user.addBioDetails );
app.post('/api/users/:id/addContactDetails' , api_user.addContactDetails );
app.post('/api/users/:id/addJobDetails' , api_user.addJobDetails );
app.post('/api/users/:id/addBillingAddr' , api_user.addBillingAddr );
//update
app.put('/api/users/:id/updateBio' , api_user.updateBioDetails );
app.put('/api/users/:id/updateContactDetails' , api_user.updateContactDetails );
app.put('/api/users/:id/updateJobDetails' , api_user.updateJobDetails );
app.put('/api/users/:id/updateBillingAddr' , api_user.updateBillingAddr );
//Getting all User info
app.get('/api/users' , api_user.getAllUsers);
app.get('/api/users/:id' , api_user.getUserById); 
//app.put('/api/users/:id' , api_user.updateUser);
//app.delete('/api/users/:id', api_users.deleteUser);


//File Uploads

 app.post('/photos' , uploading.single('file'), api_photo.uploadSingle);
 app.post('/photos/multiple', uploading.array('files',4), api_photo.uploadMultiple); //not working...
module.exports=app;