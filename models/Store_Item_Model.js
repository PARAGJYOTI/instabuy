/*
*The Store item Model in individual inventories
*Multiple referencing 
*** light modification Needed***

*/
var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var ItemSchema =  new Schema({
	ItemName : String,
	Model : String ,
	Description : [String],
    SuperCreator :  { type : Schema.Types.ObjectId , ref : 'UserProfile'},
	Price : Number ,
	hasOffer : {type : Boolean , defalut: null},
    Offer : {type: Number},
	Reviews : [{ UserReviews : String , Reviewer: { type: Schema.Types.ObjectId , ref : 'UserProfile'}},
				{StoreReviews : String , Reviewer: {type : Schema.Types.ObjectId , ref : 'StoreProfile'}}],
	CurrentStockedItem : Number,
	Weight : Number ,
	Dimention:{ length : Number, Breadth: Number , Height : Number},
	Menufacturer : String, 
	Brand : String,
	Catagroy : [String],
	ImagePath : {MainImage : String , AltImagePath : [String]},
	VideoPath : String ,
	WishListAdds: Number 

}); 
mongoose.model('Item' , ItemSchema);