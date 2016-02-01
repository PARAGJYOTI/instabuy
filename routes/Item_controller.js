var express = require('express');
var mongoose = require('mongoose');
var ItemConstructor = mongoose.model('Item');
          
//  All logics for getting Item details goes here
//  Getalluser
//  geT SINGLE USER by ID 
//  get sorted list of Items 
 
   exports.getAllItems =function(req ,res){


		   ItemConstructor.find()
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


		ItemConstructor.findById(req.params.id)
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
    
           
//  Creating user for signUp perpose
           
 exports.createItem =function(req ,res){
		var Item = new ItemConstructor();
	  //user detials from form 
		Item.ItemName=req.body.ItemName;
        Item.Model=req.body.Model;
        Item.Description=req.body.Description;
        Item.SuperCreator=req.body.SuperCreator;
        Item.Price = req.body.Price;
        Item.hasOffer = req.body.hasOffer;
        Item.Offer = req.body.Offer;
        Item.Menufacturer=req.body.Menufacturer;
        Item.SuperCreator =req.body.SuperCreator;
		

         Item.save(function(err, Item){

			if(err){
				return res.send(500, err);
			}
			 return res.send(Item);

		});
 };
 

  

  
		
	
        
        
 
    
 
    
