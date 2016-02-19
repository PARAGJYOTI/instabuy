

var ItemConstruct=function(data){
        this.ItemName=data.ItemName;
        this.Model=data.Model;
        this.Description=data.Description;
        this.SuperCreator=data.SuperCreator;
        this.Price = data.Price;
        this.hasOffer = data.hasOffer;
        this.Offer = data.Offer;
        this.Reviews=data.reviews;
        this.CurrentStockedItems=data.CurrentStockedItems;
        this.Weight=data.Weight;
        this.Menufacturer=data.Menufacturer;
        this.SuperCreator =data.SuperCreator;
        this.Brand=data.Brand;
        this.Catagory=data.Catagory;
        this.ImagePath=data.ImagePath;
        this.VideoPath=data.VideoPath;
        this.WishListAdds=data.WishListAdds;
        this.Clones=data.Clones;
        this.Likes=data.Likes;
        }
        
 ItemConstruct.prototype.getDetails=function(){
     var obj={
         Name :this.ItemName,
         Model:this.Model,
         Description:this.Description,
         Price:this.Price,
         Weight: this.weight,
         Menufacturer : this.Menufacturer,
         Brand:this.Brand,
         Catagory:this.Catagory
         }
          
     return obj;
     }
  
  var itemob={ItemName:'phone', Model:'630' , Description:'ohhhooo'};
    var newitem =new ItemConstruct(itemob);
    
    console.log(newitem.getDetails());