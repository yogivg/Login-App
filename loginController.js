app.controller("loginController", function($scope,$state,user,AuthService){
                    	$scope.user = userCred;
                        $scope.login = function(user) {
                        	$state.go('login');
                        };
                        $scope.logout = function() {
                        	userService.logout();
                            $state.go('login', {}, {reload: true});
                        };  
                });