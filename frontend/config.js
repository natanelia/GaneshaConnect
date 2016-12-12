import MainView from './views/main.html';
import LoginView from './views/login.html';
import UserView from './views/user.html';
import DetailView from './views/detail.html';

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
      url: '/',
      template: LoginView,
      title: 'Ganesha Connect - Login'
    });

  $stateProvider
    .state('home', {
      url: '/home',
      template: MainView,
      controller: 'MainController',
      title: 'Ganesha Connect - Reports'
    });

    $stateProvider
    .state('user', {
      url: '/user',
      template: UserView,
      controller: 'MainController',
      title: 'Ganesha Connect - Users'
    });

    $stateProvider
    .state('detail', {
      url: '/detail/:id',
      template: DetailView,
      controller: 'MainController',
      title: 'Ganesha Connect - Details'
    });
}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];