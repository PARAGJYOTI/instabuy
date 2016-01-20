/*
This Model explains how the store Profile Page would look Like
***LOTS OF MODIFICATION NEEDED***
*/

var mongoose = require('mongoose');
var Schema= mongoose.Schema();

var StoreDesignSchema = new Schema(
{
	StoreImage: [StoreImage],
	HeaderImage = [HeaderImage],
	ThemeStyle: String ,
	View : String ,
	ButtonType :  String,
	Logo : String ,

});
mongoose.model('StoreAppearence' , StoreDesignSchema);