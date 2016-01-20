/*The Module requirements */

var express = require('express');
var mongoose = require('mongoose');
var bCrypt = require('bcrypt-nodejs');

/*passport Stratagies*/

var passport= require('passport');
var LocalStrategy = require('passport-local').Strategy ;
///var BasicStrategy = require('passport-http').BasicStrategy;
var FacebookStrategy = require('passport-facebook');
/* EXporting those Models*/
var UserProfile =mongoose.model('UserProfile');
require('../models/User_Profile_Model');

module.exports = function(passport){        //never forget to put the passport parameter

  //the user ID is serialized to the session, keeping the amount of data stored within the session small
   passport.serializeUser(function(user, done) {
        done(null, user._id);
         });
//again user id is deserialized by passport from storage 
       passport.deserializeUser(function(id, done) {
       UserProfile.findById(id, function(err, user) {
            done(err, user);
          });
    });

 /*The localstrategy For User login */
       
passport.use('login' , new LocalStrategy({
      passReqToCallback : true

   } ,

   	   function( req,username,password , done){
   	   	UserProfile.findOne({'username': username} , function(err , user){
				if(err){
   	   			return done(err);
   	   		}
   	   			if(!user){                                //if user doesnot exist in database
   	   				console.log('Username Doesnot exit');
   	   				return done(null , false , {message: 'Please enter a Valid Username'});

   	   			}
   	   		  	if(!isValidPassword(user ,password)){

   	   		  		return done(null , false ,{ message:"Incorrect password"});   //if User exit but Password id not valid
   	   		  		console.log('Incorrect Password');

   	   		  	}
   	   		  return done(null , user);   //if Both are successfull return
   	   	});
  
})
  );
passport.use('signup' , new LocalStrategy({
      passReqToCallback : true

      } ,
  // this Will find if there is an existing user in User db utherwise create an user with that 
  //specific username  
   	   function(req, username, password , done){
   	   		//find a user if it matches with the current username , if so show err 
   	   			UserProfile.findOne({ 'username': username } , function(err , user){
					if(err){
   	   				return done(err); //if there is an error while processing
   	   				}
   	   			if(user){
   	   				console.log('Username Already exit ');
   	   				return done(null , false , {message: 'Username Already exit ,Please Try another Username'});

   	   			}
   	   			// otherwise Create an User
   	   		   else {
   	   		   	var newUser = new UserProfile();                //instanciating the UserProfile Model as newUser
                       newUser.username = username ;
                       newUser.password = createHash(password);

                     newUser.save( function(err){
                        if (err){
                           console.log('Error while Saving new User data' + err);
                           return new err('error saving data');
                        }
                        console.log('Resistration successfull :'+ newUser.username);
                         return done(null , newUser);


                     });
   	   		   	
   	   	};
       });
        })
);
     var isValidPassword = function(user, password){
    return bCrypt.compareSync(password, user.password);
      };
 // createHash function encrypts the password with hashSync method which takes three arguments 
 // hashSync(data, Salt , preogress) , here salt is replaced by getSlatSync and progress-show is null
  var createHash = function(password){
    return bCrypt.hashSync(password , bCrypt.genSaltSync(10) , null);
  };

  
      
};

