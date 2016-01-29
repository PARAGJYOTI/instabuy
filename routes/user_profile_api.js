var express =require('express');
var mongoose =require('mongoose');
var router = express.Router();

var UserProfile = mongoose.model('UserProfile');


  router.route('/api/users')

        .get(function(req ,res){


		   UserProfile.find(function(err, data){
			if(err){
				console.log("Database error");
				res.send(err);

			}
			//console.log(data);
			  res.json(data);
		   })
	       })

       .post(function(req ,res){
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
     
     User
     .populate('Followings')
     .save(function(err, User){

			if(err){
				return res.send(500, err);
			}
			 return res.send(User);

		});
	});
   router.get('/api/users/:id' ,(function(req ,res){


		UserProfile.findById(req.params.id ,function(err, data){
			if(err){
				console.log("Database error");
				res.send(err);

			}
			//console.log(data);
			  res.json(data);
		})
	})
	);
   router.put('/api/users/:id' ,(function(req ,res){


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
	})
	);


   /*
		Name :{
  		Firstname: String,
  		Lastname : String
  	},
    Location : String,
  	Address: String,
    Country: String,
    ContactDetials : {
      Email:String,
      MobileNo:Number
    },
    ShippingAddress : String,
    DateOfBirth : {type : Date },
    ShoppingInterest : [ShoppingInterest],
    //WishLists : [{ type: Schema.ObjectId , ref:'Item' }],
    FavoriteFood : String,
    Bio : String,
    Followings:[Followings],
    Followers: [Followers],

  	Gender: String,
  	Age: Number,
  	City : String,
  	Interestedin : String,
  	Marritualstatus: Boolean,
    Job:[{
    WorkingAt : String,
    Position : String}],
    FinancialStatus : String,
    LookingFor : String*/
	
	
	

module.exports = router ;