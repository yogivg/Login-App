app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('login');
    $stateProvider
    .state('home', {
        uri:'/home',
        templateUrl:'app/home/home.html'
    })
    .state('login',{
        uri:'/login',
        templateUrl: 'app/login/login.html',
        controller:'loginController'
    })
    .state('register',{
        uri:'/register',
        templateUrl: 'app/register/register.login.html',
        controller:'regController'
    })
    .state('content', {
        uri:'/content',
        templateUrl: 'app/content/content.html',
        controller:'contentController'
    });
    
}]);