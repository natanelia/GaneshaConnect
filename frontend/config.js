import MainView from './views/main.html';

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: '/',
      template: MainView,
      controller: 'MainController',
      title: 'Hello World'
    });
}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];