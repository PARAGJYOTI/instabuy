var express = require('express');
var passport = require('passport');
var router = express.Router();

module.exports = function(passport){

	router.get('/success' , function(req, res){
		res.send({status : 'success' , user: req.user ? req.user : null});
	});
	router.get('/failure' , function(req , res){
		res.send({status: 'failure' , user: null });
	});

   router.post('/login' , passport.authenticate('login' ,

  	{successRedirect : '/auth/success',
  	failureRedirect : '/auth/failure' 
  })
  );

    router.post('/signup' , passport.authenticate('signup' ,
  {	successRedirect: '/auth/success',
  	failureRedirect: '/auth/failure'
  })
  );

  router.get('/signout' , function(req , res){
  	req.logout();
  	res.redirect('/login');
  });

  return router;

};