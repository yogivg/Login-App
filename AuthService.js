app.factory("AuthService", function(){
    var user = "admin";
    var pwd = "admin";
   // var confirmPwd = ' ';

    var isAuthenticated = false;
return{
    login: function(username,password){
        isAuthenticated = username===user && password===pwd;
        return isAuthenticated;
    },
    isAuthenticated: function(){
        return isAuthenticated;
    },

    register: function(username,password,confirmPassword){
        if(password == confirmPassword)
        {
            user = username;
            pwd = password;
           // confirmPwd = confirmPassword===pwd;
            return isAuthenticated;
        }
        return isAuthenticated;
        }
    }
});