app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('login');
    $stateProvider
    .state('home', {
        url:'/home',
        templateUrl:'app/home/home.html'
    })
    .state('login',{
        url:'/login',
        templateUrl: 'app/login/login.html',
        controller:'loginController'
    })
    .state('register',{
        url:'/register',
        templateUrl: 'app/register/register.html',
        controller:'regController'
    })
    .state('content', {
        url:'/content',
        templateUrl: 'app/content/content.html',
        controller:'contentController'
    });
    
}]);


