/*
*The Model for Store profile .
* IT contains evry informtion about every stores.

*/
var mongoose = require('mongoose');
var Schema= mongoose.Schema();

var StoreProfileSchema= new Schema({
  
  StoreName : String,
  EstablishedYear: Number ,
  Location : String ,
  City: String ,
  Country : String ,
  OwnerName : [Owner],
  StoreType: [StoreType],
  StoreReviews : [{ UserReviews : String , { type: Schema.ObjectId , ref : 'UserProfile'},
                  StoreReviews : String , {type : Schema.ObjectId , ref : 'StoreProfile'}}],
  Followers : [Followers],
  Following : [Following],
  StarsGained : Number ,
  Slogan : String ,
  ParentCompany :{type : Schema.ObjectId},
  DeliveryLocation : [DeliveryLocation],
  NoOfItems: Number,
  ContactDetails : {
    email : [email], MobileNo: [MobileNo], SiteLink : String
  }

});

mongoose.model('StoreProfile', StoreProfileSchema);