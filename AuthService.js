app.factory("AuthService", function(){
    var user = "admin";
    var pwd = "admin";
    var isAuthenticated = false;
return{
    login: function(username,password){
        isAuthenticated = username===user && password===pwd;
        return isAuthenticated;
    },
    isAuthenticated: function(){
        return isAuthenticated;
    }
}
    
	
});