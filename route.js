app.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
    .state('login',{
        uri:'/login',
        templateUrl: 'app/login/login.html'
    })
    .state('register',{
        uri:'/register',
        templateUrl: 'app/register/register.login.html'
    })
    .state('content', {
        uri:'/content',
        templateUrl: 'app/content/content.html'
    });
    $urlRouterProvider.otherwise('login');
});