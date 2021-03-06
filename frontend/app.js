require('./reset.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Config from './config.js';
import MainController from './controllers/MainController.js';

angular.module('app', [uiRouter])
  .controller('MainController', MainController)
  .config(Config)
  .run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }]
  );
