angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('andrei', {
    url: '/page2',
    templateUrl: 'templates/andrei.html',
    controller: 'andreiCtrl'
  })

  .state('neil', {
    url: '/page3',
    templateUrl: 'templates/neil.html',
    controller: 'neilCtrl'
  })

  .state('joao', {
    url: '/page4',
    templateUrl: 'templates/joao.html',
    controller: 'joaoCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});