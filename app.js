var app = angular.module('myApp', ['ui.router','toaster']);

// app.run(function($rootScope,$location,$state,AuthService){
//     $rootScope.$on('$stateChangeStart', function(event, toState, toParam, fromState, fromParam){
//         console.log('state changed to :' +toState);
//     });
//     if(AuthService.isAuthenticated()){
//         $state.transitionTo('login');
//     }
// });

