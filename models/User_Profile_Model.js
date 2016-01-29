/*
    THE UserProfile Model :-) 
*/
var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var UserProfileSchema = new Schema(
{   

    username :String,
    password :String,
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
    ShoppingInterest : [{type:String}],
    
    WishLists : [{ type: Schema.ObjectId , ref:'Item' }],
    FavoriteFood : [String],
    Bio : String,
    Followings:[{type: Schema.Types.ObjectId ,ref:'UserProfile'}],
    Followers: [{type: Schema.Types.ObjectId , ref:'UserProfile'}],

  	Gender: String,
  	Age: Number,
  	City : String,
  	Interestedin : String,
  	Marritualstatus: Boolean,
    Job:[String],
    FinancialStatus : String,
    LookingFor : String



});

var UserProfile = mongoose.model("UserProfile" , UserProfileSchema);