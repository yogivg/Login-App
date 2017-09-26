app.factory("AuthService", function(){
    
	var usersMock = {
    	'testUser': {
        	username: 'admin',
            password: 'admin'
        },
        'testUser2': {
        	username: 'yogi',
            password: 'yogi'
        }
    };
	var userService = {
    	user: undefined,
    	login: function(userCredentials) {
        	// later --> $http.post('auth', userCredentials).then(...)
            // for demo use local data
            var user = usersMock[userCredentials.username]
            userService.user = ( user && ( user.password == userCredentials.password ) ) ? 
            	user : undefined;
            return user;
        },
        logout: function() {
        	userService.user = undefined;
        }
    }
    return userService;
});