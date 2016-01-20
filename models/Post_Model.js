/*This Model explains the Posts of users as well as Stores which would be combinedly showed to Feed 
***Modification needed due to Multiple reference***

*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
	created_by: {type : Schema.ObjectId , ref:'UserProfile' },
	
	created_at: {type: Date, default: Date.now},
	Text: {type : String},
	Likes : Number,
	Comments : [{Comment : String , 
				Commentor : { User :{ type: Schema.ObjectId , ref:'UserProfile' } ,
							 Store : {type : Schema.ObjectId , ref : 'StoreProfile'}}}],
	Clones : [{type: Schema.ObjectId , ref:'UserProfile'} ,
				{type: Schema.ObjectId , ref:'StoreProfile'}],
	Photos: [{type:String}],
	Tags: [{type:Schema.ObjectId , ref:'UserProfile'}, 
			{type:Schema.ObjectId , ref:'StoreProfile'}],
	RichText:{
		BackgroundCol: String,
		FontCol:String,
		Font: String
	}

});



mongoose.model('Post', postSchema);

