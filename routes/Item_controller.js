var express = require('express');
var mongoose = require('mongoose');
var Item = mongoose.model('Item');
          
//  All logics for getting Item details goes here
//  Getalluser
//  geT SINGLE USER by ID 
//  get sorted list of Items 
 
   exports.getAllItems =function(req ,res){


		   Item.find()
                      .populate('SuperCreator Reviewers')
                      .exec(function(err, data){
			if(err){
				console.log("Database error");
				res.send(err);

			}
			//console.log(data);
			  res.json(data);
		   });
	       };
           
           
  exports.getItemByIdd= function(req ,res){


		Item.findById(req.params.id)
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
    
           
//  Creating user for signUp perpose
           
 exports.createItem =function(req ,res){
		var Item = new Item();
	  //user detials from form 
		Item.Name.Firstname = req.body.Firstname;
		Item.Name.Lastname = req.body.Lastname;
		Item.City = req.body.City;
	    Item.Gender =req.body.Gender;
		Item.DateOfBirth = req.body.DateOfBirth;
		

         Item.save(function(err, Item){

			if(err){
				return res.send(500, err);
			}
			 return res.send(Item);

		});
 };
 
 
//  All additional Item details Goes down Here
      
      
//   Add user billing Detials
      
  exports.addBillingAddr =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
          
        Item.Address = req.body.address;
		Item.ShippingAddress = req.body.ShippingAddress;
		Item.Location = req.body.Location;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  
  exports.updateBillingAddr =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
          
        Item.Address = req.body.address;
		Item.ShippingAddress = req.body.ShippingAddress;
		Item.Location = req.body.Location;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  
//    Add Item COntact detials

  exports.addContactDetails =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
          
        //Item.ContactDetials.MobileNo = req.body.MobileNo ;
		Item.Country = req.body.Country;
		//Item.ContactDetials.Email = req.body.Email;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  exports.updateContactDetails =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
          
        //Item.ContactDetials.MobileNo = req.body.MobileNo ;
		Item.Country = req.body.Country;
		//Item.ContactDetials.Email = req.body.Email;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  
//   Add Bio details

  exports.addBioDetails =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
          
        Item.Age = req.body.Age;
		Item.Bio = req.body.Bio;
		Item.ShoppingInterest = req.body.ShoppingInterest;
		Item.FavoriteFood = req.body.FavoriteFood;
		Item.Followings = req.body.Followings;
		Item.Marritualstatus =req.body.Marritualstatus;
		Item.Interestedin = req.body.Interestedin;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
  exports.updateBioDetails =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
          
        Item.Age = req.body.Age;
		Item.Bio = req.body.Bio;
		Item.ShoppingInterest = req.body.ShoppingInterest;
		Item.FavoriteFood = req.body.FavoriteFood;
		Item.Followings = req.body.Followings;
		Item.Marritualstatus =req.body.Marritualstatus;
		Item.Interestedin = req.body.Interestedin;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
//   Add user Job Details

exports.addJobDetails =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
       
        
		Item.Job.WorkingAt = req.body.WorkingAt ;
		Item.Job.Position = req.body.Position;
		Item.FinancialStatus = req.body.FinancialStatus;
		Item.LookingFor = req.body.LookingFor;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
		
exports.updateJobDetails =function(req,res){
      
      Item.findOne(req.params.id, function(err, Item){
          if(err){
              console.log('error whille adding');
              
          }
       
        
		Item.Job.WorkingAt = req.body.WorkingAt ;
		Item.Job.Position = req.body.Position;
		Item.FinancialStatus = req.body.FinancialStatus;
		Item.LookingFor = req.body.LookingFor;
        
        Item.save(function(err,resData){
            if(err){
                console.log('error while saving the user data');
            }
            res.json(resData);
        })
      });
        
      
  };
		
	
        
        
 
    
 
    
