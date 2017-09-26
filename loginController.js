app.controller("loginController", function($scope,$rootscope,$stateParams,$state,AuthService){
    $rootscope.title = "This is Login Form";
    $scope.formSubmit=function(){
if(AuthService.login($scope.username,$scope.password)){
    $scope.error = '';
    $scope.username ='';
    $scope.password = '';
    $state.transitionTo('home');
        }
        else{
            $scope.error = "Incorrect username/password";
        }
    } ;               	
});