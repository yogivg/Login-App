
app.controller("regController", function($scope,$stateParams,$state,toaster,AuthService){

    $scope.regFormSubmit=function(){
        if(AuthService.register($scope.username,$scope.password,$scope.confirmPassword)){

                $state.go('login');
                 toaster.pop('success',' ','Registration success',5000);
            }
        
        
//if(AuthService.register($scope.username,$scope.password,$scope.confirm-password)){
   // $scope.error = '';
   // $scope.username ='';
   // $scope.password = '';
      // // else{
          //  toaster.pop('error', ' ', 'Password incorrect', 5000);
        //    $state.go('register');
       // }  
           // $scope.error = "Incorrect username/password";
           
           // alert($scope.error);
            
    } ;               	
});
