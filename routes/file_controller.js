
 exports.uploadSingle=function(req, res){

	res.send(req.file);
    
};

exports.uploadMultiple=function(err,req, res){
    if(err){
        res.send(err);
    }
    
    console.log('multi UPload success')
	res.send(req.files);
    
};

