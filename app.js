var app = angular.module('myApp', ['ui.router']);

app.run(function($rootscope,$location,$state,AuthService){
    $rootscope.$on('$stateChangeStart', function(event, toState, toParam, fromState, fromParam){
        console.log('state changed to :' +toState);
    });
    if(AuthService.isAuthenticated()){
        $state.transitionTo('login');
    }
});