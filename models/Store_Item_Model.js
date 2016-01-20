/*
*The Store item Model in individual inventories
*Multiple referencing 
*** light modification Needed***

*/
var mongoose = require('mongoose');
var Schema= mongoose.Schema();

var ItemSchema =  new Schema({
	ItemName : String,
	Model : String ,
	Description : [Description],
	Price : Number ;
	Offer : {type : Number , defalut: Null}
	Reviews : [{ UserReviews : String , { type: Schema.ObjectId , ref : 'UserProfile'},
				StoreReviews : String , {type : Schema.ObjectId , ref : 'StoreProfile'}],
	CurrentStockedItem : Number,
	Weight : Number ,
	Dimention:{ length : Number, Breadth: Number , Height : Number},
	Menufacturer : String, 
	Brand : String,
	Catagroy : [Catagory],
	ImagePath : {MainImage : String , AltImagePath = [AltImagePath]},
	VideoPath : String ,
	WishListAdds: Number 

}); 
mongoose.model('Item' , ItemSchema);