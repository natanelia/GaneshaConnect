require('./reset.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import Config from './config.js';
import MainController from './controllers/MainController.js';
import UserController from './controllers/UserController.js';
import ReportController from './controllers/ReportController.js';

angular.module('app', [uiRouter, ngCookies])
  .controller('MainController', MainController)
  .controller('UserController', UserController)
  .controller('ReportController', ReportController)
  .config(Config)
  .run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }]
  );

  
