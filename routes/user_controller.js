var express = require('express');
var mongoose = require('mongoose');
var UserProfile = mongoose.model('UserProfile');
          
//  All logics for getting User details goes here
//  Getalluser
//  geT SINGLE USER by ID 
//  get sorted list of Users 
 
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
           
           
           
           
           
  exports.getUserById = function(req ,res){


		UserProfile.findById(req.params.id
                   /*.populate('Followings')
                   .exec(*/ , function(err, data){
			if(err){
				console.log("Database error");
				res.send(err);

			}
			//console.log(data);
			  res.send(data);
		});
	};
    
           
//  Creating user for signUp perpose
           
 exports.createUser =function(req ,res){
		var User = new UserProfile();
	  //user detials from form 
		User.Name.Firstname = req.body.Firstname;
		User.Name.Lastname = req.body.Lastname;
		User.City = req.body.City;
	    User.Gender =req.body.Gender;
		User.DateOfBirth = req.body.DateOfBirth;
		

         User.save(function(err, User){

			if(err){
				return res.send(500, err);
			}
			 return res.send(User);

		});
 };
 
 
//  All additional User details Goes down Here
      
      
//   Add user billing Detials
      
  exports.addBillingAddr =function(req,res){
      
      UserProfile.findOne(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
          
        User.Address = req.body.address;
		User.ShippingAddress = req.body.ShippingAddress;
		User.Location = req.body.Location;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  
  exports.updateBillingAddr =function(req,res){
      
      UserProfile.findOne(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
          
        User.Address = req.body.address;
		User.ShippingAddress = req.body.ShippingAddress;
		User.Location = req.body.Location;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  
//    Add User COntact detials

  exports.addContactDetails =function(req,res){
      
      UserProfile.findOne(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
          
        //User.ContactDetials.MobileNo = req.body.MobileNo ;
		User.Country = req.body.Country;
		//User.ContactDetials.Email = req.body.Email;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  exports.updateContactDetails =function(req,res){
      
      UserProfile.findOne(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
          
        //User.ContactDetials.MobileNo = req.body.MobileNo ;
		User.Country = req.body.Country;
		//User.ContactDetials.Email = req.body.Email;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  
//   Add Bio details

  exports.addBioDetails =function(req,res){
      
      UserProfile.findOne(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
          
        User.Age = req.body.Age;
		User.Bio = req.body.Bio;
		User.ShoppingInterest = req.body.ShoppingInterest;
		User.FavoriteFood = req.body.FavoriteFood;
		User.Followings = req.body.Followings;
		User.Marritualstatus =req.body.Marritualstatus;
		User.Interestedin = req.body.Interestedin;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  exports.updateBioDetails =function(req,res){
      
      UserProfile.findOne(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
          
        User.Age = req.body.Age;
		User.Bio = req.body.Bio;
		User.ShoppingInterest = req.body.ShoppingInterest;
		User.FavoriteFood = req.body.FavoriteFood;
		User.Followings = req.body.Followings;
		User.Marritualstatus =req.body.Marritualstatus;
		User.Interestedin = req.body.Interestedin;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
//   Add user Job Details

exports.addJobDetails =function(req,res){
      
      UserProfile.findById(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
       
        
		User.Job.WorkingAt = req.body.WorkingAt ;
		User.Job.Position = req.body.Position;
		User.FinancialStatus = req.body.FinancialStatus;
		User.LookingFor = req.body.LookingFor;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
		
exports.updateJobDetails =function(req,res){
      
      UserProfile.findOne(req.params.id, function(err, User){
          if(err){
              console.log('error whille adding');
              
          }
       
        
		User.Job.WorkingAt = req.body.WorkingAt ;
		User.Job.Position = req.body.Position;
		User.FinancialStatus = req.body.FinancialStatus;
		User.LookingFor = req.body.LookingFor;
        
        User.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
		
	
  //Upload Profile and Other Images//
  
  
 exports.addProfilePic  = function(req, res){
     UserProfile.findById(req.params.id , function(err, user){
         user.ProfilePic= req.file.filename;
         if(err){
             res.send(500,err);
             console.log('err' + err +'could not  write to image path');
         }
         user.save(function(err,data){
             if(err){
                 res.send(err);
                 console.log('couldnot save user profilepic');
             }
             res.json(data);
             console.log(res.file);
         });
     });
     
 };
exports.uploadMultiple=function(req, res){
    
    console.log('multi UPload success')
	res.send(req.files);
    
};


        
        
 
    
 
    
