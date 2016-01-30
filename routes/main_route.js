var express = require('express');
var mongoose= require('mongoose');
var Post = mongoose.model('Post');
var UserProfile = mongoose.model('UserProfile');
var app=express.Router();
var api_post = require('./post_controller');
var api_user =require('./user_controller');

//post api routes 

app.post('/api/posts' , api_post.createPost);
app.get('/api/posts' , api_post.getAllPosts);
app.get('/api/posts/:id' , api_post.getPostById);
app.put('/api/posts/:id' , api_post.updatePost);
app.delete('/api/posts/:id' , api_post.deletePost);

//uSER Api rotes
app.post('/api/users' , api_user.createUser);
app.post('/api/users/:id/addBio' , api_user.addBioDetails );
app.post('/api/users/:id/addContactDetails' , api_user.addContactDetails );
app.post('/api/users/:id/addJobDetails' , api_user.addJobDetails );
app.post('/api/users/:id/addBillingAddr' , api_user.addBillingAddr );
app.get('/api/users' , api_user.getAllUsers);
app.get('/api/users/:id' , api_user.getUserById); 
//app.put('/api/users/:id' , api_user.updateUser);
//app.delete('/api/users/:id', api_users.deleteUser);

module.exports=app;