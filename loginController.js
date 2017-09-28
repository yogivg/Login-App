app.controller("loginController", function($scope,$stateParams,$state,toaster,AuthService){

    $scope.formSubmit=function(){
if(AuthService.login($scope.username,$scope.password)){
   // $scope.error = '';
   // $scope.username ='';
   // $scope.password = '';
    $state.go('home');
        }
        else{
           // $scope.error = "Incorrect username/password";
             toaster.pop('error',' ','Incorrect username/password',5000);
           // alert($scope.error);
        }
    } ;               	
});