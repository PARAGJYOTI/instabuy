/*This model explains the Appearance of the 
*User profile page or Store Profile page Which can 
*be dynamically change for every user.it gives the full flexibility 
*to design customized Backgrounds, theme colors, buttons, 
*charts, views , image-position etc.
*
* Author : Paragjyoti Deka
* LICENCE : null
*/

var mongoose = require('mongoose');
var Schema= mongoose.Schema();

var AppearenceSchema = new Schema(
{
	ProfilePic: [ProfilePic],
	HeaderPic : [HeaderPic],
	Theme style : String ,
	View: String,
	ThemeColour : String,
    Settings: {

    	MutedUsers: [{type : Schema.ObjectId , ref:'UserProfile'}],
    	MutedStores: [{type: Schema.ObjectId , ref :'StoreProfile'}],
    	BlockedUsers: [{type : Schema.ObjectId , ref:'UserProfile'}],
    	BlockedStores: [{type: Schema.ObjectId , ref :'StoreProfile'}]
    }





});

mongoose.model('Appearence' , AppearenceSchema);
