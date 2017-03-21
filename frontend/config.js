import MainView from './views/main.html';
import LoginView from './views/login.html';
import UserView from './views/user.html';
import DetailView from './views/detail.html';
import FormView from './views/form.html';

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
      controller: 'UserController',
      title: 'Ganesha Connect - Users'
    });

    $stateProvider
    .state('detail', {
      url: '/detail/:id',
      template: DetailView,
      controller: 'ReportController',
      title: 'Ganesha Connect - Details'
    });
	
	$stateProvider
    .state('form', {
      url: '/form',
      template: FormView,
      title: 'Ganesha Connect - From'
    });
}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];