/* This model explains how the order will be taken and requested from user 
to stores.

**** Modification Needed***

*/
var mongoose = require('mongoose');
var Schema= mongoose.Schema();

var OrderSchema = new Schema({
  
  	OrderBy : {type : Schema.ObjectId , ref=['UserProfile' , 'StoreProfile']},
  	ShippingAdd : {type : Schema.ObjectId , ref=['UserProfile' , 'StoreProfile']},
  	PaymentType : String,
  	Item : [{type : Schema.ObjectId , ref='Item' }],
  	ReplyStatus : Boolean,
  	IsEmergency : Boolean
});

mongoose.model('Order' , OrderSchema);