/*
The main app module in angular
Dependecies: NgRoute ,ngResource , ng-File-UPload , ui-router

*/

var app=angular.module('mainApp' , [ 'ngRoute', ,'ngFileUpload','ngResource' ]).run(function($rootScope , $http ){
	$rootScope.authenticated =false ;
	$rootScope.current_user = 'Guest';

$rootScope.signout =function(){

 $http.get('auth/signout');
 $rootScope.authenticated= false;
 $rootScope.current_user = 'Guest';


};
});
 
app.factory('httpService' ,function($resource){        //defining and declaring the service called httpservice for Http request on 'post'
	                                                   //endpoints
	 return	$resource('/api/posts/:id');

});
app.factory('userService' ,function($resource){
	 return	$resource('/api/users/:id');           // defining the userService for http request to 'user' endpoints

});

//configuring angularjs Providers At bootstrping before run 
//$routeProvider and $LocationProvider

app.config(function($routeProvider, $locationProvider){

$routeProvider
	.when('/' , {

	templateUrl: 'partials/login.html' ,
	controller: 'authController'
     })
	.when('/home' , {

	templateUrl: 'partials/main.html' ,
	controller: 'postController'
     })
     .when('/posts/:id' , {

	templateUrl: 'partials/posts.html' ,
	controller: 'singleGetCtrl'
     })
    .when('/users' , {

	templateUrl: 'partials/users.html' ,
	controller: 'UserController'
     })
     .when('/users/:id' , {

	templateUrl: 'partials/user.html' ,
	controller: 'userGetCtrl'
     })
     .when('/signup' , {

	  templateUrl:'partials/signup.html',
	  controller: 'authController'

    })
    .when('/login' , {
    	templateUrl: 'partials/login.html' ,
    	controller : 'authController'
    })
    .when('/signout' , {
    	templateUrl: 'partials/login.html' ,
    	controller : 'mainController'
    })
     .when('/about' , {
    	templateUrl: 'partials/fileUpload.html' ,
    	controller : 'MyCtrl'
    })

    $locationProvider.html5Mode(false);
});




/*Controller for Posts*/

app.controller('postController' , function($http ,$rootScope ,$resource, httpService, $scope,$location,$routeParams){
	$scope.post = function(){
        $scope.created_by=$rootScope.current_userid;
	httpService.save( {text: $scope.text , created_by: $scope.created_by , created_at: Date.now()});
			$scope.text='';
			
			$http.get('/api/posts').success(function(data){
		$scope.posts =data;
        console.log(data.created_by);
        if(!data.created_by){
            $scope.posts.created_by.username='Guest';
        }
		});
    
			
		};
    	
     });
/*controller for getting only one post*/
app.controller('singleGetCtrl' ,function($http ,$scope, $routeParams){
 
    $scope.id= $routeParams.id;
     console.log($scope.id);
     $http.get('/api/posts/'+ $scope.id).success(function(data){
     	$scope.post=data;
     	console.log(data);
     });
 });


 //The main controller
app.controller('mainController' , function($http ,$scope,$resource, httpService,userService){
	$scope.posts =httpService.query();

	});
//The User controller 
app.controller('UserController' , function($http ,$rootScope,$location,$scope){
	//$scope.users =userService.query();
    if($rootScope.authenticated===false){
         $location.path('/signup');
     }
	$http.get('/api/users').success(function(data){
		$scope.users =data;
    
	});
   
});
//Single user getter
app.controller('userGetCtrl' ,function($http ,$scope,$rootScope,$location, $routeParams){
   
  
    $scope.id= $routeParams.id;
     console.log($scope.id);
     $http.get('/api/users/'+ $scope.id).success(function(data){
         
     	$scope.User=data;
     	$scope.User.ShoppingInterest = data.ShoppingInterest;
     	console.log(data);});
     if($rootScope.authenticated===false){
         $location.path('/signup');
     }
 });
  
//The Authentication controller

//login

app.controller('authController' , function($rootScope, $scope ,$http , $location ){
	$scope.user = {username: '', password: '' , Gender:'' , DateOfBirth:''};
	$scope.error_message = '';
    $scope.user.Gender =['male' , 'female'];
    
    $scope.warning= function(){
        if($scope.user.password&&$scope.user.password===$scope.user.repassword){
              $scope.message='Password  Matched!';
              $scope.color= 'green';
            return true;
            
        }
        else if($scope.user.password && $scope.user.password.length <=8){
            $scope.message='Password Weak';
            $scope.color= 'orange';
            return true;
        }
    };
//    $scope.required= function(){
//        if($scope.user.DateOfBirth===null && $scope.submit()){
//            $scope.reqmessage='Please tell us the Date Of Birth'
//            return true;
//        }
//    }

$scope.login = function(){

	$http.post('auth/login' , $scope.user).success(function(data){
		if(data.status=='success'){
		$rootScope.authenticated=true;
        $rootScope.current_user= data.user.username;
        $rootScope.current_userid=data.user._id;
        
        $location.path('/home');

    }  
       

    	else{
    		$scope.error_message = data.message|| 'Please Enter a valid Username' ;
    	}

	});
};
$scope.signup = function(){
    $http.post('auth/signup' ,$scope.user).success(function(data){

      if(data.status=='success'){
      	$rootScope.authenticated = true;
      	$rootScope.current_user=data.user.username ;
         $rootScope.current_userid=data.user._id;
      	$location.path('/home'); 
      	
      }
      else if(!$scope.user.username || !$scope.user.password){
           $scope.error_message ='Please Fill Up The Fields';
       }
      else{
      	$scope.error_message=data.message|| 'Username Already Exists';
      }

    });


};


});

//The file upload Controller


// app.controller('fileController'  , function($scope , Upload){

// $scope.submit =function(){
// 	if(form.file.$valid && $scope.file)
// 	{
// 		$scope.upload($scope.file);
// 	}
// };

// //upload file on select or drop

// $scope.upload=function(file){
// Upload.upload({
// 	url:'/photos',
// 	data: {file:file ,'username': $scope.username}
// }).then(function(resp){
// 	console.log('success' + resp.config.data.file.name+ 'uploaded response :' +resp.data);
// },function(resp){
// 	console.log('error status:'+ resp.status);
// },function(evt){
// 	var progressPercentage =parseInt(100.0 *evt.loaded/evt.total);
// 	console.log('progress :' + progressPercentage + '%' + evt.config.data.file.name);
// });

// };
// });
app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
      data: {file: file, username: $scope.username},
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }
}]);
