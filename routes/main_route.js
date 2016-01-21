var express = require('express');
var Post = mongoose.model('Post');
var UserProfile = mongoose.model('UserProfile');
var app=express.Router();
var api_post = require('./api_post');
var api_users =require('./api_users');

//post api routes 
app.post('/api/posts' , api_post.getAllPosts);
app.get('/api/posts/:id' , api_post.getPostById);
app.put('/api/posts/:id' , api_post.updatePost);
app.delete('/api/posts/:id' , api_post.deletePost);

//uSER Api rotes
app.post('/api/users' , api_user.getAllUsers);
app.get('/api/users/:id' , api_users.getUserById); 
app.put('/api/users/:id' , api_users.updateUser);
app.delete('/api/users/:id', api_users.deleteUser);
