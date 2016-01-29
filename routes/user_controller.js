var express = require('express');
var mongoose = require('mongoose');
var UserProfile = mongoose.model('UserProfile');
          
          
  exports.getAllUsers =function(req ,res){


		   UserProfile.find()
                      .populate('Followings' ,'Age')
                      .exec(function(err, data){
			if(err){
				console.log("Database error");
				res.send(err);

			}
			//console.log(data);
			  res.json(data);
		   });
	       };
           
 exports.createUser =function(req ,res){
		var User = new UserProfile();
	  //user detials from form 
		User.Name.Firstname = req.body.Firstname;
		User.Name.Lastname = req.body.Lastname;
		User.Address = req.body.address;
		User.Age = req.body.Age;
	    User.Gender =req.body.Gender;
		User.Marritualstatus =req.body.Marritualstatus;
		User.City = req.body.City;
		User.Interestedin = req.body.Interestedin;
		User.Job.WorkingAt =	req.body.WorkingAt ;
		User.Job.Position = req.body.Position;
		User.FinancialStatus = req.body.FinancialStatus;
		User.LookingFor = req.body.LookingFor;
		User.FavoriteFood = req.body.FavoriteFood;
		User.DateOfBirth = req.body.DateOfBirth;
		User.Bio = req.body.Bio;
		User.ShoppingInterest = req.body.ShoppingInterest;
		User.ShippingAddress = req.body.ShippingAddress;
		User.Country = req.body.Country;
		User.ContactDetials.MobileNo = req.body.MobileNo ;
		User.ContactDetials.Email = req.body.Email;
		User.Followings = req.body.Followings;
		User.Location = req.body.Location;

         User.save(function(err, User){

			if(err){
				return res.send(500, err);
			}
			 return res.send(User);

		});
 };
 
 exports.getUserById = function(req ,res){


		UserProfile.findById(req.params.id)
                   .populate('Followings')
                   .exec(function(err, data){
			if(err){
				console.log("Database error");
				res.send(err);

			}
			//console.log(data);
			  res.json(data);
		});
	};
    
    
 exports.updateUser = function(req ,res){


		UserProfile.findById(req.params.id ,function(err, User){
			if(err){
				console.log("Database error");
				res.send(err);

			}
		User.Name.Firstname = req.body.Firstname;
		User.Name.Lastname = req.body.Lastname;
		User.Address = req.body.address;
		User.Age = req.body.Age;
	    User.Gender =req.body.Gender;
		User.Marritualstatus =req.body.Marritualstatus;
		User.City = req.body.City;
		User.Interestedin = req.body.Interestedin;
		User.Job.WorkingAt =	req.body.WorkingAt ;
		User.Job.Position = req.body.Position;
		User.FinancialStatus = req.body.FinancialStatus;
		User.LookingFor = req.body.LookingFor;
		User.FavoriteFood = req.body.FavoriteFood;
		User.DateOfBirth = req.body.DateOfBirth;
		User.Bio = req.body.Bio;
		User.ShoppingInterest = req.body.ShoppingInterest;
		User.ShippingAddress = req.body.ShippingAddress;
		User.Country = req.body.Country;
		User.ContactDetials.MobileNo = req.body.MobileNo ;
		User.ContactDetials.Email = req.body.Email;
		User.Followings = req.body.Followings;
		User.Location = req.body.Location;

		User.save(function(err, User){

			if(err){
				return res.send(500, err);
			}
			 return res.send(User);

		});
			//console.log(data);
		});
	};
    
